var Jobs = require('../models/Jobs');

// Create a new job in the database
exports.createJob = function (job, callback) {
  // TODO
  Jobs.create({
    title: job.title,
    description: job.description,
    postedDate: job.date,
    salary: job.salary,
  }, (err, data) => {
    callback(data); // first param of a callback is always error
  });
};

// Get all jobs that have a salary greater than $50,000
exports.getHighPayingJobs = function (callback) {
  // TODO
  Jobs.find((err, data) => {
    if(err) return err;
    return callback(data);
  })
};
// fork
// clone
// checkout to aplai168 branch
// make changes
// pull request to aplai168 branch
