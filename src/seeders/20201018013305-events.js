const faker = require('faker')

const events = [...Array(100)].map((event, index) => (
  {
    id: index + 1,
    title: faker.random.words(),
    city: faker.address.city(),
    description: faker.lorem.paragraph(),
    cat: faker.random.number(10), // not sure what the values need to be.
    uid: faker.random.number(100),
    state: faker.address.stateAbbr(),
    url: faker.internet.url(),
    orgname: faker.company.companyName(),
    orgaddress: faker.address.streetAddress(),
    orgphone: faker.phone.phoneNumber(),
    orgfax: null,
    orgemail: faker.internet.email(),
    site: null,
    rivid: faker.random.number(100),
    expectpart: null,
    expectspec: null,
    issue: null,
    media: null,
    nowreventinfo: null,
    contact_id: null,
    updated: new Date(),
    html_description: faker.lorem.sentences(),
    retired: 0
  }
))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('events', events, {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('events', null, {})
  }
}
