const uuid = require('uuid')

const repository = require('../repository')

async function create(type, otherId, tag) {
  const types = ['event','alumni','article']
  if (!types.includes(type)) throw "Invalid tag type"

  const objTag = await repository.tag.getTagByName(tag)
  let newTag
  if (objTag === null) {
    const id = uuid.v4()
    const data = {
      id,
      tag,
      usage: 1,
    }
    newTag = await repository.tag.create(data)
  } else {
    newTag = await repository.tag.addUsage(tag)
  }
  const tagId = await newTag.id

  const existingTag = await repository.tag.relationship.getRelationTagByTagIdOtherId(type, tagId, otherId)
  if (existingTag.length === 0) {
    switch (type) {
      case 'event':
          await repository.tag.relationship._event.create(otherId, tagId)
      case 'alumni':
          await repository.tag.relationship.alumni.create(otherId, tagId)
      case 'article':
          await repository.tag.relationship.article.create(otherId, tagId)
    }
  } 
  return newTag
}

function getTagById(id) {
  return repository.tag.getTagById(id)
}

function getEventTagById(id) {
  return repository.tag.relationship._event.getTagById(id)
}

function getAlumniTagById(id) {
  return repository.tag.relationship.alumni.getTagById(id)
}

function getArticleTagById(id) {
  return repository.tag.relationship.article.getTagById(id)
}

async function getAllByOtherId(otherId, type) {
  let relationTags
  switch (type) {
    case 'alumni':
      relationTags = await getAlumniTagById(otherId)
      break
    case 'event':
      relationTags = await getEventTagById(otherId)
      break
    case 'article':
      relationTags = await getArticleTagById(otherId)
      break
  }
  
  let tags = []
  for (let i = 0; i < relationTags.length; i++) {
    const tag = await repository.tag.getTagById(relationTags[i].tagId)
    tags.push(tag.tag)
  }
  return tags
}


module.exports = {
  create,
  relationship: {
    getAllByOtherId,
    alumni: {
      getTagById: getAlumniTagById,
    },
    _event: {
      getTagById: getEventTagById,
    },
    article: {
      getTagById: getArticleTagById,
    }
  },
  getTagById,
}