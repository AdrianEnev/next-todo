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
        <div className="w-screen h-screen pt-3 px-3">
            <div className="w-full h-full flex flex-col items-center justify-center mt-[-10%]">
                
                <p className="text-3xl font-medium">Login</p>

                <form className="w-[90%] md:w-1/3">
                    <div className="mt-4">
                        <label className="block text-sm font-medium">Email</label>
                        <input type="email" className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-400 focus:border-red-400 sm:text-sm" 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium">Password</label>
                        <input type="password" className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-red-400 focus:border-red-400 sm:text-sm" 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="mt-6 w-full bg-red-400 text-white py-2 px-4 rounded-md hover:opacity-60"
                        onClick={handleSubmit}
                    >
                        Login
                    </button>
                    <p className="text-base font-medium text-gray-300 absolute underline select-none hover:opacity-60"
                        onClick={() => window.location.href = "/register"}
                    >
                        Register here
                    </p>
                </form>
            </div>
        </div>
    )
}

export default page