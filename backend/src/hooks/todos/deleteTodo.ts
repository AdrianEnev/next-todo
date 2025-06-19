import Todo from "../../models/Todo";

// Looks for todoId AND userId for extra security
const deleteTodo = async (todoId: string, userId: string) => {
    try {
        const result = await Todo.deleteOne({ _id: todoId, userId: userId });
        if (result.deletedCount === 0) {
            return { success: false, error: 'Todo not found or does not belong to user' };
        }
        console.log('Todo deleted successfully:', todoId);
        return { success: true };
    } catch (err: any) {
        console.error('Error deleting todo:', err.message);
        return { success: false, error: err.message };
    }
};

export default deleteTodo;