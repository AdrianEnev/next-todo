// Stores JWT token in cookies
const loginUser = async (email: string, password: string) => {
    try {
        const response = await fetch(`http://localhost:4000/api/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Specifies the request body is JSON
            },
            credentials: "include", // Include cookies in the request
            body: JSON.stringify({
                email: email,
                password: password
            }),
        });
        
        if (!response.ok) {
            console.error("Response error:", response);
            return null;
        }

        console.log('Login successful');
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

export default loginUser;