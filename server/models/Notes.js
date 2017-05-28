import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
    title: {
        type: String,
    },
    text: {
        type: String,
        required: true,
    },
    color: {
        type: String,
    },
    createDate: {
        type: Date,
    },
});

export const Note = mongoose.model('Note', noteSchema);
