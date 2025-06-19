import { Todo } from "@src/interfaces/TodoInterfaces";
import AddTodoComponent from "./AddTodoComponent";
import TodoComponent from "./TodoComponent";

interface TodoListProps {
    todos: Todo[];
    addModeEnabled: boolean;
    newTodo: Todo | undefined;
    setNewTodo: any;
    onDelete: any
}

function TodoList({ todos, addModeEnabled, newTodo, setNewTodo, onDelete }: TodoListProps) {
    return (
        <div className="w-full h-full overflow-y-auto max-h-screen rounded-xl">
            {(todos.length == 0 && !addModeEnabled) ? (
                <div className="w-full h-full flex items-center justify-center">
                    <p className="text-2xl font-bold text-center pt-3 text-black">No TODOs found!</p>
                </div>
            ) : (addModeEnabled) ? (
                <div className="w-full h-full flex pt-[5%] sm:pt-0 sm:items-center sm:justify-center">
                    <AddTodoComponent setNewTodo={setNewTodo} newTodo={newTodo} />
                </div>
            ) : (
                <div className="flex flex-col flex-wrap overflow-x-hidden">
                    {todos.map((todo: Todo) => (
                        <div key={todo._id} className="relative">
                            <TodoComponent todo={todo} />
                            <p className="hidden xs:absolute xs:block text-red-400 text-3xl sm:text-4xl right-3 sm:right-6 top-[40%] hover:opacity-60"
                                onClick={() => {
                                    onDelete(todo._id);
                                }}
                                onDoubleClick={() => {
                                    onDelete(todo._id);
                                }}
                            >
                                X
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default TodoList