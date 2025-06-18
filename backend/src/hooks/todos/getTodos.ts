import Todo from "../../models/Todo";

const getTodos = async (id: string) => {
    try{
        const todos = await Todo.find({_id: id});
        return todos;
    }catch (error: any) {
        console.error("Error fetching todos:", error.message);
        throw new Error("Could not fetch todos");
    }
    
}

export default getTodos;