import { Component } from "react";
import { nanoid } from "nanoid";
import { FormContacts } from "./Formcontacts/Formcontacts";
import { ListContacts } from "./Listcontacts/Listcontacts";
import { Filter } from "./Filter/Filter";

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

  handleAddContact = data => {
    const { name, number } = data;

    if (
      this.state.contacts.find(
        contact => contact.name === name && contact.number === number
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...data, id: nanoid() }],
    }));
  };

  handleFilterChange = event => {
    const inputFilter = event.target.value;
    this.setState({ filter: inputFilter });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state.filter;
    const filterContacts = this.state.contacts.filter(contact => {
      return (
        contact.name
          .toLowerCase()
          .includes(this.state.filter.trim().toLowerCase()) ||
        contact.number.includes(this.state.filter)
      );
    });
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
      }}>
        <h1>Phonebook</h1>
        <FormContacts handleAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleFilterChange} filter={filter} />
        <ListContacts
          contacts={filterContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
};
