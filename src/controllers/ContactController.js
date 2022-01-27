const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    const contactList = await ContactRepository.findAll();

    response.json(contactList);
  }

  async show(request, response) {
    const { id } = request.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'contact not found' });
    }

    response.json(contact);
  }

  store() {

  }

  update() {

  }

  async delete(request, response) {
    const { id } = request.params;

    const contactExists = await ContactRepository.findById(id);

    if (!contactExists) {
      return response.status(404).json({ error: 'contact not found' });
    }

    await ContactRepository.deleteById(id);
    response.sendStatus(204);
  }
}

module.exports = new ContactController();
