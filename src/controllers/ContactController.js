const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    const contactList = await ContactRepository.findAll();

    response.send(contactList);
  }

  show() {

  }

  store() {

  }

  update() {

  }

  delete() {

  }
}

module.exports = new ContactController();
