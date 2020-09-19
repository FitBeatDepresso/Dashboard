const {mongoose} = require('../index.js');

var Schema = mongoose.Schema;

var userSchema = Schema({
    firstName: String,
    lastName: String,
    fullName: String,
    email: String,
    password: String,
    accessToken: String,
    refreshToken: String,
    connections: [Schema.Types.ObjectId],
})

var User = mongoose.model('User', userSchema);

module.exports = {
    User,
}

