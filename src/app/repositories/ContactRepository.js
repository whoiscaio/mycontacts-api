const { v4: uuid } = require('uuid');

let contacts = [
  {
    name: 'Matheus',
    email: 'matheus@mail.com',
    phone: '123123123',
    category_id: uuid(),
    id: uuid(),
  }, {
    name: 'Caio',
    email: 'caio@mail.com',
    phone: '321321321',
    category_id: uuid(),
    id: uuid(),
  }, {
    name: 'Joana',
    email: 'joana@othermail.com',
    phone: '231231231',
    category_id: uuid(),
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
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(
        contacts.find((contact) => contact.email === email),
      );
    });
  }

  findByPhone(phone) {
    return new Promise((resolve) => {
      resolve(
        contacts.find((contact) => contact.phone === phone),
      );
    });
  }

  deleteById(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create(body) {
    return new Promise((resolve) => {
      contacts.push({
        ...body,
        id: uuid(),
      });

      resolve();
    });
  }

  update(id, body) {
    return new Promise((resolve) => {
      contacts = contacts.map((contact) => (
        contact.id === id
          ? {
            ...contact,
            ...body,
            id,
          }
          : contact
      ));

      resolve();
    });
  }
}

module.exports = new ContactRepository();
