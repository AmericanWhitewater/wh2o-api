const faker = require('faker')

const accidents = [...Array(100)].map(() => (
  {
    accidentdate: new Date(),
    victimname: faker.name.firstName(),
    reachid: faker.random.number(1000),
    countryabbr: faker.address.stateAbbr(), // inaccurate
    state: faker.address.stateAbbr(),
    river: faker.lorem.words(4),
    section: faker.lorem.words(4),
    location: null,
    waterlevel: null,
    rellevel: null,
    difficulty: null,
    age: faker.random.number(80),
    experience: null,
    privcomm: null,
    boattype: null,
    groupinfo: null,
    numvictims: null,
    othervictimnames: null,
    description: faker.lorem.paragraphs(),
    type: null,
    cause: null,
    contactname: null,
    contactphone: null,
    contactemail: null,
    status: null
  }
))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('accidents', accidents, {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('accidents', null, {})
  }
}
