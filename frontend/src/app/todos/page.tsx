'use client'

import TodoList from "@src/components/todos/TodoList";
import deleteTodo from "@src/hooks/todos/deleteTodo";
import getTodos from "@src/hooks/todos/getTodos";
import postTodo from "@src/hooks/todos/postTodo";
import { Todo } from "@src/interfaces/TodoInterfaces";
import { useEffect, useState } from "react"

const sortTodos = async (todos: Todo[]) => {
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    return todos.sort((a, b) => {
        const priorityComparison = priorityOrder[a.priority as keyof typeof priorityOrder] - priorityOrder[b.priority as keyof typeof priorityOrder];
        if (priorityComparison !== 0) {
            return priorityComparison; // Sort by priority first
        }
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB.getTime() - dateA.getTime(); // Then sort by createdAt in descending order
    });
}

function page() {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<Todo>()
    const [addModeEnabled, setAddModeEnabled] = useState(false);
    const [loading, setLoading] = useState(true);
    const fetchTodos = async () => {
        const response = await getTodos();
        const sortedTodos = await sortTodos(response);
        
        setTodos(sortedTodos);
        setLoading(false);
    }
    const onSubmit = async () => {

        // Check if the form has been fully filled out
        if (!newTodo || !newTodo.title || !newTodo.description) {
            return;
        }
        const result = await postTodo(newTodo.title, newTodo.description, newTodo.dueDate, newTodo.priority);
        if (!result) {
            return;
        }

        // Add the new todo to the list and sort it
        const updatedTodos = [...todos, result];
        const sortedTodos = await sortTodos(updatedTodos);
        setTodos(sortedTodos);
        setAddModeEnabled(false);
    }
    
    const onDelete = async (todoId: string) => {
        const result = await deleteTodo(todoId);
        if (!result) {
            return;
        }

        const updatedTodos = todos.filter(todo => todo._id !== todoId);
        const sortedTodos = await sortTodos(updatedTodos);
        setTodos(sortedTodos);
    }

    useEffect(() => {
        fetchTodos();
    }, [])

    return (
        <div className="w-screen h-screen mt-3 mx-3">
            <div>
                <button className="w-auto h-10"
                onClick={() => {
                    window.location.href = '/';
                    }}
                >
                    <p className="text-xl font-semibold text-white hover:opacity-60">{"<="} Dashboard</p>
                </button> 
            </div>

            <div className="w-full h-full flex flex-col items-center justify-center mt-[-10%]">
                <div className="w-[85%] h-[65%] md:w-1/2 md:h-1/2 bg-gray-50 border border-red-400 shadow-md rounded-xl">
                    {!loading ? (
                        <TodoList 
                            todos={todos}
                            addModeEnabled={addModeEnabled} 
                            newTodo={newTodo}
                            setNewTodo={setNewTodo}
                            onDelete={onDelete}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <p className="text-2xl font-bold text-center pt-3 text-black">Loading...</p>
                        </div>
                    )}
                </div>  
                
                {!loading && (
                    <div className="w-1/2 flex flex-row gap-x-3 justify-center mt-3">
                        <button className="min-w-30 max-w-44 h-10 rounded-xl bg-red-400 text-white shadow-md hover:opacity-60"
                            onClick={() => {setAddModeEnabled(!addModeEnabled)}}
                        >
                            <p className="font-bold text-base">
                                {addModeEnabled ? "Cancel" : "New TODO"}
                            </p>
                        </button>
                        
                        <button className={`min-w-30 max-w-44 h-10 rounded-xl bg-red-400 text-white shadow-md hover:opacity-60
                            ${!addModeEnabled ? "hidden" : ""}`}
                            onClick={() => {onSubmit()}}
                        >
                            <p className="font-bold text-base">
                                Add
                            </p>
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default page