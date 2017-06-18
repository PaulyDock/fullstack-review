var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var repoSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  full_name: String,
  owner: {
    login: String,
    id: Number,
    url: String,
    repos_url: String,
  },
  updated_at: Date,
  default_branch: String
});

var Repo = mongoose.model('Repo', repoSchema);


module.exports = Repo;