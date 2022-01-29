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

  async store(request, response) {
    const { name, level } = request.body;

    const nameAlreadyExists = await ContactRepository.findByName(name);

    if (nameAlreadyExists) {
      return response.status(400).json({ error: 'taken', taken: 'name' });
    }

    await ContactRepository.create({ name, level });
    response.sendStatus(204);
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

    if (!contactExists) {
      return response.status(404).json({ error: 'contact not found' });
    }

    await ContactRepository.deleteById(id);
    response.sendStatus(204);
  }
}

module.exports = new ContactController();
