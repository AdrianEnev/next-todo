const postUser = async (
    username: string,
    email: string,
    password: string
) => {
    try {
        const response = await fetch(`http://localhost:4000/api/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Specifies the request body is JSON
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            }),
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

export default postUser;