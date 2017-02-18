// TODO: Create and export a mongoose model called `User` whose schema would handle an object like `exampleUser`
// var exampleUser = {
//   name: 'Taka',
//   email: 'taka@taka.com'
// };


const mongoose = require('mongoose');
// do i need to require this page from the contorller/server?
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});
module.exports = mongoose.model('User', UserSchema);
