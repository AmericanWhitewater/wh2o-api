const faker = require('faker')

const commentsHelper = {
  sections: () => {
    const sections = ['river', 'photo', 'journal']

    return sections[Math.floor(Math.random() * 3)]
  },
  types: () => {
    const sections = ['warning', 'complaint', 'comment']

    return sections[Math.floor(Math.random() * 3)]
  }
}

const comments = [...Array(2000)].map((affiliate, index) => (
  {
    uid: faker.random.number(100),
    sectionid: faker.random.number(100),
    name: faker.name.firstName(),
    comments: faker.lorem.sentences(),
    posted: new Date(),
    section: commentsHelper.sections(),
    type: commentsHelper.types(),
    deleted: null,
    duid: null,
    revision: index,
    is_final: true,
    is_private: false
  }
))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('comments', comments, {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comments', null, {})
  }
}
