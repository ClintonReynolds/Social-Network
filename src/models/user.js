import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
  },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
, 'Please enter a valid email address'],
    },  
    thoughts: {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
    },
    friends: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
}, {
    toJSON: {
        virtuals: true,
        getters: true,
},
})
    userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

    const User = model('User', userSchema);
    export default User;