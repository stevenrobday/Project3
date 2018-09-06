var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentsSchema = new Schema ({
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

var Comments = mongoose.model("Comments", CommentsSchema);

module.exports = Comments;