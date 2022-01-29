class CategoryController {
  index(request, response) {
    response.send('ok - index');
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
