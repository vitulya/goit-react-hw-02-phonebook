import { Component } from 'react';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

// import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = ({ name, number, id }) => {
    const contact = { id, name, number };

    this.state.contacts.find(contact => contact.name === name)
      ? alert(`${contact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, contact],
        }));
  };

  changeFilter = value => {
    this.setState({
      filter: value,
    });
  };

  removeContact = id => {
    const { contacts } = this.state;
    const idx = contacts.findIndex(item => item.id === id);

    const [...newContactsList] = contacts;

    console.log(newContactsList.splice(idx, 1));

    // this.setState(state => {
    //   return {
    //     contacts: () => {
    //       state.contacts.splice(idx - 1, 1);
    //     },
    //   };
    // });
  };

  render() {
    const { contacts, name, filter } = this.state;

    return (
      <>
        <Section title="Phonebook">
          <ContactForm handleAddContact={this.handleAddContact} />
        </Section>

        <Section title="Contacts">
          <Filter filter={filter} changeFilter={this.changeFilter} />
          <ContactList
            contact={contacts}
            name={name}
            filter={filter}
            removeContact={this.removeContact}
          />
        </Section>
      </>
    );
  }
}
