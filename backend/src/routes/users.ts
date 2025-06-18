import { Router } from 'express';
import User from '../models/User';
import jwt from 'jsonwebtoken';
import postUser from '../hooks/users/postUser';
import comparePassword from '../hooks/encryption/comparePassword';
import getUser from '../hooks/users/getUser';

const usersRouter = Router();
const SECRET_KEY = process.env.JWT_SECRET!;

// Get user token
usersRouter.get('/', async (req, res) => {
    const token = req.cookies.userToken;
    if (!token) {
        res.status(401).json({ message: "No token" });
        return;
    }

    const user = await getUser(token);
    if (!user) {
        res.status(401).json({ message: "Invalid token" });
        return;
    }
    res.json({ user });
});

// Register new user
usersRouter.post('/', async (req, res) => {

    const { username, email, password } = req.body;
    const registeredUser = await postUser(username, email, password);

    if (!registeredUser){
        res.status(400).json({ error: registeredUser });
    }
    res.status(201).json(registeredUser);
});

usersRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        res.status(401).send('Invalid credentials');
    } 

    const validPassword = await comparePassword(password, user?.password);
    if (!validPassword) {
        res.status(401).send('Invalid credentials');
    } 

    const token = jwt.sign(
        { userId: user?.id, email: user?.email },
        SECRET_KEY,
        { expiresIn: '1h' }
    );

    res.cookie('userToken', token, {
        httpOnly: true,                // Can't access via JS
        secure: process.env.NODE_ENV === 'production', // Only HTTPS in prod
        sameSite: 'lax',            // CSRF protection
        maxAge: 60 * 60 * 1000         // 1 hour
    });
    
    res.json({ message: 'Login successful' });
})

// Logout user
usersRouter.post('/logout', (req, res) => {
    res.clearCookie('userToken');
    res.json({ message: 'Logout successful' });
});

export default usersRouter;
