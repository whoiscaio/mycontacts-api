const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CategoryRepository.findAll();

    response.json(categories);
  }

  show(request, response) {
    response.send('ok - show');
  }

  store(request, response) {
    response.send('ok - store');
  }

  update(request, response) {
    response.send('ok - update');
  }

  delete(request, response) {
    response.send('ok - delete');
  }
}

module.exports = new CategoryController();
