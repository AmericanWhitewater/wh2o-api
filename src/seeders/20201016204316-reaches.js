const faker = require('faker')

const reaches = [...Array(100)].map(() => (
  {

    river: faker.lorem.words(2),
    section: faker.lorem.words(2),
    altname: null,
    county: faker.address.county(),
    zipcode: faker.address.zipCode(),
    length: faker.random.number(100),
    avggradient: null,
    maxgradient: null,
    agency: null,
    gaugeinfo: null,
    description: faker.lorem.paragraphs(),
    photoid: null,
    permitid: null,
    huc: null,
    plat: null,
    plon: null,
    prrn: null,
    tlat: null,
    tlon: null,
    trrn: null,
    skid: null,
    status: 'v',
    edited: null,
    is_final: true,
    revision: null,
    class: 'none',
    ploc: null,
    tloc: null,
    was_final: false,
    thumboverride: false,
    shuttledetails: faker.lorem.paragraph(),
    abstract: faker.lorem.paragraph(),
    direction_default: null,
    custom_destination: null,
    revision_comment: null,
    permiturl: null,
    permitinfo: null,
    image_override: null
  }
))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('reaches', reaches, {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('reaches', null, {})
  }
}
