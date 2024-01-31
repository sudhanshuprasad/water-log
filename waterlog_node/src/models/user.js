const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    text: {
        type: String,
    },
    completed: {
        type: Boolean,
    },
    PhNumber:{
        type: Number,
        // required: true,
    }
});

const UserModel = mongoose.model('Users', UserSchema);

module.exports = UserModel;