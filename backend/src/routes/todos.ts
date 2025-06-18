import { Router } from 'express';
import getTodos from '../hooks/todos/getTodos';
import postTodo from '../hooks/todos/postTodo';
import getUser from '../hooks/users/getUser';

const todosRouter = Router();

// Get all todos for a user
todosRouter.get('', async (req, res) => {
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
    
    const userId = user?.userId;

    const todos = await getTodos(userId);
    if (!todos) {
        res.status(500).json({ error: 'Failed to retrieve todos' });
        return;
    }

    res.json(todos);
});

// Add new todo
todosRouter.post('/', async (req, res) => {
    const { title, description, dueDate, priority, userId } = req.body;
    const todo = await postTodo(title, description, dueDate, priority, userId);
    if (!todo) {
        res.status(500).json({ error: 'Failed to create todo' });
        return;
    }
    res.status(201).json(todo);
});

export default todosRouter;