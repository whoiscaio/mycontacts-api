const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    // List all contacts
    const contacts = await ContactRepository.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    // Get one specific contact
    const { id } = request.params;

    const contact = await ContactRepository.findById(id);

    if (contact) {
      return response.json(contact);
    }

    response.status(404).json({ error: 'contact not found' });
  }

  async store(request, response) {
    // Create a new contact
    const {
      name, email, phone, category_id: categoryId,
    } = request.body;

    const emailAlreadyExists = await ContactRepository.findByEmail(email);
    const phoneAlreadyExists = await ContactRepository.findByPhone(phone);

    if (emailAlreadyExists) {
      return response.status(400).json({ error: 'taken', taken: 'email' });
    }

    if (phoneAlreadyExists) {
      return response.status(400).json({ error: 'taken', taken: 'phone' });
    }

    await ContactRepository.create({
      name, email, phone, categoryId,
    });

    response.sendStatus(204);
  }

  update(request, response) {
    // Update an existing contact

    response.send('Update Contact');
  }

  async delete(request, response) {
    // Delete a contact
    const { id } = request.params;

    const contact = await ContactRepository.findById(id);

    if (contact) {
      await ContactRepository.deleteById(id);

      return response.sendStatus(204);
    }

    response.status(404).json({ error: 'contact not found' });
  }
}

module.exports = new ContactController();
