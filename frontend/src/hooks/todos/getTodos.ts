const getTodos = async () => {
    try {
        const response = await fetch(`http://localhost:4000/api/todos`, {
            method: 'GET',
            credentials: "include"
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

export default getTodos;