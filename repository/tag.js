const model = require('../datastore/mongo/model')

async function create(data) {
  const tag = await model.tag.create(data)
  return tag
}

async function createTagEvent(eventId, tagId) {
  const data = {
    eventId,
    tagId,
  }
  const eventTag = await model.tagEvent.create(data)
  return eventTag
}

async function createTagAlumni(userId, tagId) {
  const data = {
    userId,
    tagId,
  }
  const eventTag = await model.tagAlumni.create(data)
  return eventTag
}

async function createTagArticle(articleId, tagId) {
  const data = {
    articleId,
    tagId,
  }
  const eventTag = await model.tagArticle.create(data)
  return eventTag
}

function getTagById(id) {
  return model.tag.findOne({id})
}

async function getTagByName(name) {
  const tag = await model.tag.findOne({tag: name})
  return tag
}

async function getAll() {
  const tags = await model.tag.find({})
  return tags
}

async function addUsage(tag) {
  const currTag = await getTagByName(tag)
  const usage = await currTag.usage
  const updatedTag = await model.tag.findOneAndUpdate({tag}, {usage:usage+1})
  return updatedTag
}

function getEventTagById(eventId) {
  return model.tagEvent.find({eventId})
}

function getAlumniTagById(userId) {
  return model.tagAlumni.find({userId})
}

function getArticleTagById(articleId) {
  return model.tagArticle.find({articleId})
}

function getRelationTagByTagIdOtherId(type, tagId, otherId) {
  switch (type) {
    case 'alumni':
      return model.tagAlumni.find({userId: otherId, tagId})
    case 'event':
      return model.tagEvent.find({eventId:otherId, tagId})
    case 'article':
      return mode.tagArticle.find({articleId: otherId, tagId})
  }
}

module.exports = {
  create,
  relationship: {
    getRelationTagByTagIdOtherId,
    alumni: {
      getTagById: getAlumniTagById,
      create: createTagAlumni
    },
    _event: {
      getTagById: getEventTagById,
      create: createTagEvent
    },
    article: {
      getTagById: getArticleTagById,
      create: createTagArticle
    }
  },
  getTagById,
  getTagByName,
  getAll,
  addUsage,
}