import { Todo } from "@src/interfaces/TodoInterfaces";

interface AddTodoComponentProps {
    newTodo: Todo | undefined;
    setNewTodo: any;
}

function AddTodoComponent({newTodo, setNewTodo}: AddTodoComponentProps) {

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="text-black pt-3 w-full mt-[-5%]">
            <form className="flex flex-col items-center">
                <p className="font-medium text-xl mb-1">Title</p>
                <input type="text" className="w-[80%] sm:w-1/2 h-10 rounded-md border border-gray-300 p-2 mb-3" placeholder="Enter title" 
                    onChange={(e) => {
                        setNewTodo({
                            ...newTodo, // Spread the current newTodo object
                            title: e.target.value // Update the title field
                        });
                    }}
                />
                <p className="font-medium text-xl mb-1">Description</p>
                <input type="text" className="w-[80%] sm:w-1/2 h-10 rounded-md border border-gray-300 p-2 mb-3" placeholder="Enter description" 
                    onChange={(e) => {
                        setNewTodo({
                            ...newTodo, // Spread the current newTodo object
                            description: e.target.value // Update the title field
                        });
                    }}
                />
                <p className="font-medium text-xl mb-1">Due (optional)</p>
                <input type="date" min={today} className="w-[80%] sm:w-1/2 h-10 rounded-md border border-gray-300 p-2 mb-3" 
                    onChange={(e) => {
                        setNewTodo({
                            ...newTodo, // Spread the current newTodo object
                            dueDate: e.target.value // Update the dueDate field
                        });
                    }}
                />
                <p className="font-medium text-xl mb-1">Priority (optional)</p>
                <select id="dropdown" className="w-[80%] sm:w-1/2 h-10 rounded-md border border-gray-300 p-2 mb-3"
                    onChange={(e) => {
                        setNewTodo({
                            ...newTodo, // Spread the current newTodo object
                            priority: e.target.value as 'low' | 'medium' | 'high' // Update the priority field
                        });
                    }}
                >
                    <option value="">-- Select Priority --</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </form>
        </div>
    )
}

export default AddTodoComponent