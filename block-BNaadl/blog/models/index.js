var mongoose = require('mongoose');
var Schema = mongoose.Schema;
let articleSchema = new Schema(
  {
    title: String,
    description: String,
    tags: [String],
    author: String,
    likes: { type: Number, default: 0 },
  },
  { timestamps: true }
);
let Article = mongoose.model('Index', articleSchema);
module.exports = Index;