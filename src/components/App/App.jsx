import { ContactForm, ContactList, React, Filter } from 'components/App/index';
import { nanoid } from 'nanoid';
import { Container, Title, SubTitle } from 'components/App/App.styled';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '+38-099-459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '+38-095-443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '+38-073-645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '+38-067-227-91-26' },
    ],
    filter: '',
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  onAddContact = values => {
    console.log(values);
    const { contacts } = this.state;
    const { name, number } = values;
    if (name.trim() !== '' && number.trim() !== '') {
      const newContact = {
        id: nanoid(),
        name: name,
        number: number,
      };

      const isContactExist = contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (isContactExist) {
        alert(`${name} is already in contacts`);
        return;
      }

      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };

  onContactDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.onAddContact} />

        <SubTitle>Contacts</SubTitle>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={this.state.contacts}
          getFilteredContacts={this.getFilteredContacts}
          onContactDelete={this.onContactDelete}
        />
      </Container>
    );
  }
}

export default App;
