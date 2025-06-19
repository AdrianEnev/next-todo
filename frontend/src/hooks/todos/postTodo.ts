const postTodo = async (
    title: string,
    description: string,
    dueDate?: Date,
    priority?: 'low' | 'medium' | 'high'
) => {
    try {
        const response = await fetch(`http://localhost:4000/api/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "include",
            body: JSON.stringify({
                title,
                description,
                dueDate,
                priority
            })
        });
        
        if (!response.ok) {
            console.error("Response error:", response);
            return null;
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

export default postTodo;