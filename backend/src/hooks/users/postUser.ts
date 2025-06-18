import User from '../../models/User';
import encryptPassword from '../encryption/encryptPassword';

const postUser = async (
    username: string,
    email: string,
    password: string
) => {
    try {
        // Encrypt password
        const encryptedPassword = await encryptPassword(password)
        const user = new User({ username, email, password: encryptedPassword });
        await user.save();

        console.log('User registered successfully:', user);
        return user;
    } catch (err: any) {
        console.log('Error registering user:', err.message);
        return err
    }
}

export default postUser;