import React, { Component } from 'react';

import css from './PhoneBooks.module.css';
import shortid from 'shortid';

class PhoneBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      contactList: []
    };
  }

  handleInputChange = event => {
    this.setState({
      name: event.currentTarget.value
    });
  }

  handleOnSubmitForm = event => {
    event.preventDefault();

    const { name } = this.state;
    const newContact = {
      id: shortid.generate(),
      name: name
    };

    this.setState(prevState => ({
      contactList: [...prevState.contactList, newContact],
      name: ''
    }));
  }

  render() {
    const { name, contactList } = this.state;
    const contactInputId = shortid.generate();

    return (
      <>
        <div className={css.boxForm}>
          <h2 className={css.sectionChapter}>Phonebook</h2>

          <form onSubmit={this.handleOnSubmitForm}>
            <label htmlFor={contactInputId}>Name</label>

            <input
              type="text"
              name="newContact"
              value={name}
              className={css.inputContact}
              id={contactInputId}
              onChange={this.handleInputChange}
              required
            />

            <button type="submit">Add contact</button>
          </form>
        </div>

        <div className={css.boxContacts}>
          <h2 className={css.sectionChapter}>Contacts</h2>

          <ul className={css.contactList}>
            {contactList.map(contact => (
              <li key={contact.id}>{contact.name}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default PhoneBooks;
