import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    creator: String,
    email : String,
    phone:String,
    address: String,
    
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;