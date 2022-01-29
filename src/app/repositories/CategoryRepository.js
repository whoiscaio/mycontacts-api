const db = require('../../database');

class CategoryRepository {
  async findAll() {
    const rows = await db.query(`
      SELECT * FROM categories
    `);

    return rows;
  }

  async findByName(name) {
    const [row] = await db.query(`
      SELECT * FROM categories
      WHERE name = $1
    `, [name]);

    return row;
  }

  async create({ name }) {
    const [row] = await db.query(`
      INSERT INTO categories (name)
      VALUES ($1)
    `, [name]);

    return row;
  }

  async deleteById(id) {
    const deleteOp = await db.query(`
      DELETE FROM categories
      WHERE id = $1
    `, [id]);

    return deleteOp;
  }
}

module.exports = new CategoryRepository();
