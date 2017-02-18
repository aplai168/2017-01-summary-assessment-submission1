// TODO: Create and export a mongoose model called `Job` that follows the description in the README


const mongoose = require('mongoose');
// do i need to require this page from the contorller/server?
const JobSchema = new mongoose.Schema({
  title: String,
  description: String,
  postedDate: Date,
  salary: Number,
});
module.exports = mongoose.model('Job', JobSchema);
