import { Router } from 'express';
import getTodos from '../hooks/todos/getTodos';
import postTodo from '../hooks/todos/postTodo';
import getUser from '../hooks/users/getUser';
import deleteTodo from '../hooks/todos/deleteTodo';

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
    
    const userId = user.userId;

    const todos = await getTodos(userId);
    if (!todos) {
        res.status(500).json({ error: 'Failed to retrieve todos' });
        return;
    }

    res.json(todos);
});

// Add new todo
todosRouter.post('/', async (req, res) => {

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

    const { title, description, dueDate, priority } = req.body;

    const result = await postTodo(title, description, user.userId, dueDate, priority);
    if (!result.success) {
        res.status(500).json({ error: 'Failed to create todo' });
        return;
    }
    res.status(201).json(result.todo);
});

// Delete todo
todosRouter.delete('/', async (req, res) => {
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

    // Here you would typically call a function to delete the todo by ID
    // For example: await deleteTodoById(todoId, user.userId);
    const { todoId } = req.body;
    const result = await deleteTodo(todoId, user.userId);
    if (!result.success) {
        res.status(500).json({ error: 'Failed to create todo' });
        return;
    }
    res.status(204).send(); 
});

export default todosRouter;