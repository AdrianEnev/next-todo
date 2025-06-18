import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
    dueDate: { type: Date, default: null },
    priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
    createdAt: { type: Date, default: Date.now, immutable: true },
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
