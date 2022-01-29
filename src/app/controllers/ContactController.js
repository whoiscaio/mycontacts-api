const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    const contactList = await ContactRepository.findAll();

    response.json(contactList);
  }

  async show(request, response) {
    const { id } = request.params;

    const contact = await ContactRepository.findById(id);

    if (contact.length === 0) {
      return response.status(404).json({ error: 'contact not found' });
    }

    response.json(contact);
  }

  async store(request, response) {
    const {
      name, email, phone, category_id,
    } = request.body;

    const nameAlreadyExists = await ContactRepository.findByName(name);
    const emailAlreadyExists = await ContactRepository.findByEmail(email);

    if (nameAlreadyExists.length !== 0) {
      return response.status(400).json({ error: 'taken', taken: 'name' });
    }

    if (emailAlreadyExists.length !== 0) {
      return response.status(400).json({ error: 'taken', taken: 'email' });
    }

    const newContact = await ContactRepository.create({
      name, email, phone, category_id,
    });
    response.json(newContact);
  }

  async update(request, response) {
    const { id } = request.params;
    const { body } = request;

    const contactExists = await ContactRepository.findById(id);

    if (!contactExists) {
      return response.status(404).json({ error: 'contact not found' });
    }

    await ContactRepository.update(id, body);
    response.sendStatus(204);
  }

  async delete(request, response) {
    const { id } = request.params;

    const contactExists = await ContactRepository.findById(id);

    if (contactExists.length === 0) {
      return response.status(404).json({ error: 'contact not found' });
    }

    const deletedContact = await ContactRepository.deleteById(id);
    response.json(deletedContact);
  }
}

module.exports = new ContactController();
