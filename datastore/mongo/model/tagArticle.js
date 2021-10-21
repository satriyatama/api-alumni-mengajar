const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  articleId: {
    type: String,
    require: true
  },
  tagId: {
    type: String,
    require: true,
  },
})

module.exports = mongoose.model('TagArticles', schema, 'tagArticles')