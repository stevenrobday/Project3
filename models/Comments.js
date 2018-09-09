const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentsSchema = new Schema ({
    // user's name
    name: {
        type: String,
        required: true
    },
    // body
    body: {
        type: String,
        required: true
    },
});

const Comments = mongoose.model("Comments", CommentsSchema);

module.exports = Comments;