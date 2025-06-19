const deleteTodo = async (
    todoId: string
) => {
    try {
        const response = await fetch(`http://localhost:4000/api/todos`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "include",
            body: JSON.stringify({
                todoId: todoId
            })
        });
        
        if (!response.ok) {
            console.error("Response error:", response);
            return null;
        }

        return true;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

export default deleteTodo;