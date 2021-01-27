import React, { Component } from 'react';
import './App.css';
import ContactList from '../ContactList';
import ContactForm from '../ContactForm';
import Filter from '../Filter ';
import { v4 as uuidv4 } from 'uuid';


class App extends Component {

  static defaultProps = {
    //   
  }
  static propTypes = {
   //
  }
  state = {
    contacts: [],
    filter: ''
  };
  
  contactID = null;
  
  addContact = ({name,number}) => {
    console.log({name,number});
    const contact = {
      id: uuidv4(),
      name,
      number
    }
    if(this.state.contacts.find(item=>item.name === name)){
      alert(`${name} is already in contacts`);
        return;
      };
    this.setState(({ contacts }) => ({
      contacts:[contact, ...contacts] 
      // contacts: contacts.includes(contact.name) ? alert('is slready') : [contact, ...contacts] //  Так можно писать? крутила по разному-не работает.В чем ошибка?
     
    }))
    
  };
  
  deleteContact = contactID => {
    this.setState(prevState => ({
      contacts:prevState.contacts.filter(contact => contact.id !== contactID),
    }));
    };
 
  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  getchangeFilter = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLocaleLowerCase();
    return (contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizeFilter)));
  };
  
  componentDidMount() {
    console.log('App componentDidMount');

    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');

    if (this.state.contacts !== prevState.contacts) {
      console.log('Oбновилось поле contacts, записываю в хранилище');

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  render() {
    const filter  = this.state.filter;
    const filterResult = this.getchangeFilter();
    return (
          <div>
      <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact}/>
      <h2>Contacts</h2>
        <Filter value={filter} onChange={ this.changeFilter}/> 
        <ContactList contactsList={filterResult}  onDelete={this.deleteContact}
        />
      </div>  
    )
  }

}

export default App;
