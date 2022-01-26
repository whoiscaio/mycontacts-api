const { v4: uuid } = require('uuid');

const contacts = [
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
    return contacts;
  }
}

module.exports = new ContactRepository();
