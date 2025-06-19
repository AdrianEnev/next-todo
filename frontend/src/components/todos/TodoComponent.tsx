import { Todo } from "@src/interfaces/TodoInterfaces"

interface TodoComponentProps {
    todo: Todo
}

const convertDateToString = (date: Date | string | undefined): string => {
    if (!date) return "No Date Specified";

    // If the date is a string, try to parse it into a Date object
    const parsedDate = typeof date === "string" ? new Date(date) : date;

    // Check if the parsedDate is a valid Date object
    if (isNaN(parsedDate.getTime())) return "Invalid Date";

    return parsedDate.toISOString().split('T')[0]; // Format date to YYYY-MM-DD
};

function TodoComponent({todo}: TodoComponentProps) {
    return (
        <div className="p-4 border-b border-gray-200 hover:opacity-60">
            <p className="text-base sm:text-lg font-semibold text-black">{todo.title}</p>
            <p className="text-sm sm:text-base text-gray-600 break-words max-w-[60%] sm:max-w-[80%]">{todo.description}</p>
            <p className="text-sm sm:text-base text-gray-600">{convertDateToString(todo.dueDate)}</p>
            <p className="text-sm sm:text-base text-gray-600">{todo.priority} priority</p>
        </div>
    )
}

export default TodoComponent