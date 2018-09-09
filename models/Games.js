const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GamesSchema = new Schema({
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

const Games = mongoose.model("Games", GamesSchema);

module.exports = Games;