const { v4: uuid } = require('uuid');

const contacts = [
  {
    name: 'caio',
    level: 12,
    id: uuid(),
  }, {
    name: 'pedro',
    level: 14,
    id: uuid(),
  }, {
    name: 'nestor',
    level: 65,
    id: uuid(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactRepository();
