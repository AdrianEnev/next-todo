import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    createdAt: { type: Date, default: Date.now, immutable: true },
    /*friend: { type: mongoose.Schema.Types.ObjectId, ref: 'User ' },
    hobbies: [{ type: String }],
    address: {
        street: { type: String },
        city: { type: String },
        zipCode: { type: String }
    }*/
});

const User = mongoose.model('User', userSchema);

export default User;
