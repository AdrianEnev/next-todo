// Deletes JWT token from cookies
const logoutUser = async () => {
    try {
        const response = await fetch(`http://localhost:4000/api/users/logout`, {
            method: 'POST',
            credentials: "include", // Include cookies in the request
        });
        
        if (!response.ok) {
            console.error("Response error:", response);
            return null;
        }

        console.log('Logout successful');
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

export default logoutUser;