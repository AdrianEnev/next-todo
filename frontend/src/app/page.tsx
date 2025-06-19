'use client'

import { useAuth } from "@src/components/AuthContext";

export default function Home() {

    const { isAuthenticated, logOut } = useAuth();

    return (
        <div className="w-screen h-screen mx-3">
            <div className="w-full h-full flex flex-col items-center justify-center mt-[-3.5%]">

                <p className="text-2xl lg:text-3xl font-medium my-3">Simple <span className="text-red-400 font-bold">Next.js</span> To Do app</p>

                {isAuthenticated ? (
                    <div className="flex flex-row gap-x-2">
                        <button className="w-32 lg:w-44 h-10 rounded-md bg-red-400 hover:opacity-60"
                        onClick={() => {
                            window.location.href = '/todos';
                            }}
                        >
                            <p className="text-lg font-semibold text-white">View TODOs</p>
                        </button> 
                        
                        
                        <button className="w-32 lg:w-44 h-10 rounded-md bg-red-400 hover:opacity-60"
                        onClick={() => {
                            logOut();
                        }}
                        >
                            <p className="text-lg font-semibold text-white">Log Out</p>
                        </button>
                    </div>
                ) : (
                    <p className="text-3xl hover:underline hover:opacity-60 mt-3 font-medium text-white"
                        onClick={() => {
                            window.location.href = '/login';
                        }}
                    >
                        Log in to view TODOs
                    </p>
                )}
            </div>
        </div>
    );
}
