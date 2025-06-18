'use client'
import postUser from "@hooks/users/postUser"
import { useState } from "react"

function page() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // Handle register form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            return;
        }

        const user = await postUser(username, email, password);
        if (user) {
            window.location.href = "/login"; // Redirect to login page after successful registration
        } else {
            console.error("Registration failed");
        }
    }

    return (
        <div className="w-screen h-screen mt-3 mx-3">
            <p className="text-3xl font-medium mt-3">Register</p>

            <form className="w-1/3">
                <div className="mt-6">
                    <label className="block text-sm font-medium ">Username</label>
                    <input type="text" className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium ">Email</label>
                    <input type="email" className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium ">Password</label>
                    <input type="password" className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="mt-6 w-full bg-red-400 text-white py-2 px-4 rounded-md hover:opacity-60"
                    onClick={handleSubmit}
                >
                    Register
                </button>
            </form>
        </div>
    )
}

export default page