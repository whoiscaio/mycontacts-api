const { v4: uuid } = require('uuid');

const db = require('../../database');

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
  async findAll() {
    const rows = await db.query(`
      SELECT * FROM contacts
    `);
    return rows;
  }

  async findById(id) {
    const row = await db.query(`
      SELECT * FROM contacts WHERE id=$1
    `, [id]);

    return row;
  }

  findByName(name) {
    return new Promise((resolve) => {
      resolve(
        contacts.find((contact) => contact.name === name),
      );
    });
  }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
      INSERT INTO contacts(name, email, phone, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [name, email, phone, category_id]);

    return row;
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

  deleteById(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);

      resolve();
    });
  }
}

module.exports = new ContactRepository();
