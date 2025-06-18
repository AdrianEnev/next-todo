import Todo from '../../models/Todo';

const postTodo = async (
    title: string,
    description: string,
    dueDate?: Date,
    priority?: string,
    userId?: string
) => {
    try {
        // Encrypt password
        const todo = new Todo({ 
            userId: userId,
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority,
        });
        await todo.save();
        console.log('Todo added successfully:', todo);
        return todo;
    } catch (err: any) {
        console.log('Error adding todo:', err.message);
        return err
    }
}

export default postTodo;