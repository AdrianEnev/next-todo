'use client'
import { useAuth } from "@src/components/AuthContext";
import loginUser from "@src/hooks/users/loginUser";
import { useState } from "react"

function page() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { onAuthenticate } = useAuth();

    // Handle login form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            return;
        }

        await loginUser(email, password);
        await onAuthenticate(); // Update authentication state
        window.location.href = "/todos";
    }

    return (
        <div className="w-screen h-screen mt-3 mx-3">
            <p className="text-3xl font-medium mt-3">Login</p>

            <form className="w-1/3">
                <div className="mt-4">
                    <label className="block text-sm font-medium">Email</label>
                    <input type="email" className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium">Password</label>
                    <input type="password" className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="mt-6 w-full bg-red-400 text-white py-2 px-4 rounded-md hover:opacity-60"
                    onClick={handleSubmit}
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default page