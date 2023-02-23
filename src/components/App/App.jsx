import Form from 'components/Form/Form';
import { nanoid } from 'nanoid';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
  };

  onSubmmitAddContact = ({ name, number }) => {
    const { contacts } = this.state;

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <Form onSubmit={this.onSubmmitAddContact} />
        <div>
          <h2>Contacts</h2>
          <ul>
            {contacts.map(({ name, number, id }) => (
              <li key={id}>
                {name}: {number}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
