const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CategoryRepository.findAll();

    response.json(categories);
  }

  show(request, response) {
    response.send('ok - show');
  }

  async store(request, response) {
    const { name } = request.body;

    const categoryExists = await CategoryRepository.findByName(name);

    if (categoryExists) {
      return response.status(400).json({ error: 'taken', taken: 'name' });
    }

    const newCategory = await CategoryRepository.create({ name });
    response.json(newCategory);
  }

  update(request, response) {
    response.send('ok - update');
  }

  async delete(request, response) {
    const { id } = request.params;

    await CategoryRepository.deleteById(id);

    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
