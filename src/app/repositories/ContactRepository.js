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
    const [row] = await db.query(`
      SELECT * FROM contacts WHERE id=$1
    `, [id]);

    return row;
  }

  async findByName(name) {
    const [row] = await db.query(`
      SELECT * FROM contacts WHERE name=$1
    `, [name]);

    return row;
  }

  async findByEmail(email) {
    const [row] = await db.query(`
      SELECT * FROM contacts WHERE email=$1
    `, [email]);

    return row;
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

  async deleteById(id) {
    const row = db.query(`
      DELETE FROM contacts WHERE id=$1
      RETURNING *
    `, [id]);

    return row;
  }
}

module.exports = new ContactRepository();
