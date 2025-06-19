import Todo from '../../models/Todo';

const postTodo = async (
    title: string,
    description: string,
    userId: string,
    dueDate?: Date,
    priority?: string,
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
        return { success: true, todo: todo };
    } catch (err: any) {
        console.log('Error adding todo:', err.message);
        return { success: false, error: err.message };
    }
}

export default postTodo;