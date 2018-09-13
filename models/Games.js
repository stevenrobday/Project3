const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GamesSchema = new Schema({
    // title
    title: {
        type: String,
        required: true
    },
    giantbombid: { type: String },
    coverimage: { type: String },
    // comments
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }],
});

GamesSchema.index({title: 1}, {unique: true});

const Games = mongoose.model("Games", GamesSchema);

module.exports = Games;