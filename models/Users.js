const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema ({
    // user first name
    first: {
        type: String,
        required: true
    },
    // user last name
    last: {
        type: String,
        required: true
    },
    // user email
    email: {
        type: String,
        required: true
    },
    // password
    password:{
        type: String,
        required: true
    },
    // wishlist
    wishlist: [{
        type: Schema.Types.ObjectId,
        ref: "Games"
      }],
    // owned
    owned: [{
        type: Schema.Types.ObjectId,
        ref: "Games"
      }]
});

// no duplicate users
UsersSchema.index({email: 1}, {unique: true});

// model for Users collection
const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;


