const mongoose = require("mongoose");
const Schema = mongoose.Schema;
bcrypt = require('bcrypt');
SALT_WORK_FACTOR = 10;

const UsersSchema = new Schema ({
    // user first name
    name: {
        type: String,
        required: true
    },
    // // user last name
    // last: {
    //     type: String,
    //     required: true
    // },
    // username
    username: {
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

UsersSchema.pre('save', function(next){
    var user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next (err);

    bcrypt.hash(user.password, salt, function(err, hash){

        user.password = hash;
        next();
    });
    });
})

UsersSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
        if (err) return cb (err);
        cb(null, isMatch);
    });
}

// no duplicate users
UsersSchema.index({username: 1}, {unique: true});

// model for Users collection
const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;