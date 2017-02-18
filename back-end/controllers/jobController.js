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
    callback(data);
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
