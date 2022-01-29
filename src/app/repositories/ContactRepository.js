const db = require('../../database');

class ContactRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    const rows = await db.query(`
      SELECT * FROM contacts
      ORDER BY name ${direction}
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

  async update(id, {
    name, email, phone, category_id,
  }) {
    const [updatedContact] = await db.query(`
      UPDATE contacts
      SET name=$1, email=$2, phone=$3, category_id=$4
      WHERE id=$5
      RETURNING *
    `, [name, email, phone, category_id, id]);

    return updatedContact;
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
