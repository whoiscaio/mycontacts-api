const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  index(request, response) {
    // List all contacts
    const contacts = ContactRepository.findAll();

    response.json(contacts);
  }

  show(request, response) {
    // Get one specific contact

    response.send('Show Contact');
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
