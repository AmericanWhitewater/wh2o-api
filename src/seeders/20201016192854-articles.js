const faker = require('faker');

const articles = [...Array(100)].map((article) => (
  {
    title: faker.lorem.words(4),
    author: faker.name.firstName(),
    abstract: faker.lorem.sentences(),
    abstractphoto: faker.image.nature(),
    icon: null,
    hascontents: null,
    contents: faker.lorem.paragraphs(),
    contentsphoto: faker.image.nature(),
    contact: null,
    posted: new Date(),
    shortname: faker.lorem.words(4),
    uid: faker.random.number(),
    releasedate: new Date(),
    deleted: 0
  }
))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('awarticles', articles, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('awarticles', null, {});
  }
};