const logLocalStorage = async () => {
    try {
        const keys = Object.keys(localStorage);
        console.log("Local Storage Keys:", keys);

        for (const key of keys) {
            const value = localStorage.getItem(key);
            console.log(`Key: ${key}, Value: ${value}`);
        }
    } catch (error) {
        console.error("Error accessing local storage:", error);
    }
}

export default logLocalStorage;