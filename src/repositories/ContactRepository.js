const { v4: uuid } = require('uuid');

let contacts = [
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

  findById(id) {
    return new Promise((resolve) => {
      resolve(
        contacts.find((contact) => contact.id === id),
      );
    });
  }

  findByName(name) {
    return new Promise((resolve) => {
      resolve(
        contacts.find((contact) => contact.name === name),
      );
    });
  }

  create(body) {
    return new Promise((resolve) => {
      contacts = [
        ...contacts,
        {
          ...body,
          id: uuid(),
        },
      ];

      resolve();
    });
  }

  deleteById(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);

      resolve();
    });
  }
}

module.exports = new ContactRepository();
