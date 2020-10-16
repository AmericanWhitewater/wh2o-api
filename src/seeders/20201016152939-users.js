const faker = require('faker');

const users = [...Array(100)].map((user) => (
  {
    uname: faker.internet.userName(),
    upass: faker.internet.password(8),
    verifydate: new Date(),
    email: faker.internet.email(),
    zip: faker.address.zipCode(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.stateAbbr(),
    country: faker.address.country(),
    lastlogin: new Date(),
    volunteer: null,
    alerts: null,
    postal: null,
    memnum: faker.random.number(100000),
    address2: null,
    home_phone: faker.phone.phoneNumber(),
    work_phone: faker.phone.phoneNumber(),
    journal: null,
    aw_beta: null,
    mbr_level: null,
    bad_addr: null,
    bad_email: null,
    mod_date: null,
    record_type: null,
    name: faker.name.firstName(),
    mem_transaction: null,
    transaction_id: null,
    expiration: null,
    modifydate: null,
    pushdate: null,
    mbr_relation: null,
    prefs: null,
    annual_renew: null,
    code: null,
    googleid: null,
    socialprofile: null,
    facebookid: null,
    epassword: null,
    remember_token: null,
    created_at: new Date(),
    updated_at: new Date()
  }
))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', users, {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};