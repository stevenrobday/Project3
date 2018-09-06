var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GamesSchema = new Schema({
    // title
    title: {
        type: String,
        required: true
    },
    // comments
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }],
    

});

var Games = mongoose.model("Games", GamesSchema);

module.exports = Games;