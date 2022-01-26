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

  store(request, response) {
    // Create a new contact

    response.send('Store New Contact');
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
