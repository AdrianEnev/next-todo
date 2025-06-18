const getUserToken = async () => {
    try {
        const response = await fetch(`http://localhost:4000/api/users`, {
            credentials: "include"
        });

        if (response.status === 401) {
            // Not logged in — expected, no need to log
            return null;
        }
        if (!response.ok) {
            // Log unexpected errors only
            console.error("Unexpected error while fetching user token:", response.statusText);
            return null;
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

export default getUserToken;