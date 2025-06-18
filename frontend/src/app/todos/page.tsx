'use client'

import getTodos from "@src/hooks/todos/getTodos";
import { useEffect, useState } from "react"

function page() {

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchTodos = async () => {
        const response = await getTodos();
        setTodos(response);
        setLoading(false);
    }

    useEffect(() => {
        fetchTodos();
    }, [])

    return (
        <div className="w-screen h-screen mt-3 mx-3">
            <div>
                <button className="w-32 h-10 rounded-md bg-red-400 hover:opacity-60"
                onClick={() => {
                    window.location.href = '/';
                    }}
                >
                    <p className="text-lg font-medium text-white">
                        <span className="font-bold text-xl">{"<"}</span> Dashboard
                    </p>
                </button> 
                <p className="text-xl my-2">
                    TODOS
                </p>
            </div>
            

            <div className="w-1/2 h-1/2 bg-white shadow-md rounded-lg">
                {(todos.length > 0 && !loading) ? (
                    <p>Todo list</p>
                ) : !loading ? (
                    <p className="text-2xl font-medium text-center pt-3 text-black">No TODOs found</p>
                ) : (
                   <p className="text-2xl font-medium text-center mt-3 text-black">Loading</p>
                )}
            </div>  
        </div>
    )
}

export default page