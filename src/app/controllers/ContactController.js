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

    response.status(400).json({ error: 'contact not found' });
  }

  store(request, response) {
    // Create a new contact

    response.send('Store New Contact');
  }

  update(request, response) {
    // Update an existing contact

    response.send('Update Contact');
  }

  delete(request, response) {
    // Delete a contact

    response.send('Delete Contact');
  }
}

module.exports = new ContactController();
