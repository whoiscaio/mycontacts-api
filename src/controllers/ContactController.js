const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    const contactList = await ContactRepository.findAll();

    response.send(contactList);
  }

  async show(request, response) {
    const { id } = request.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'contact not found' });
    }

    response.send(contact);
  }

  store() {

  }

  update() {

  }

  delete() {

  }
}

module.exports = new ContactController();
