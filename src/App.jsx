import React, {Component} from 'react';

import PhoneBooks from './components/PhoneBooks';

class App extends Component {
  state = {
    contacts: [],
    name: ''
  };

  render() {
  const { contacts, name } = this.state;

    return (
      <div>
        <PhoneBooks contacts={contacts} name={name} />
      </div>
    );
  }
}
export default App;