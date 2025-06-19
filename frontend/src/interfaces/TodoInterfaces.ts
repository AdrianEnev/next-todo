export interface Todo {
    _id: string;
    title: string;
    description: string;
    createdAt: Date;
    completed?: boolean;
    dueDate?: Date | undefined;
    priority?: 'low' | 'medium' | 'high';
}