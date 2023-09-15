import React from 'react';
import { PhoneForm } from './Phonebook/PhoneForm';
import { ListItem } from './Phonebook/FormList';
import { Container } from './App.style';

export const App = () => {
  return (
    <Container>
      <PhoneForm onAdd={addItem} />
      <ListItem/>
    </Container>
  );
};

export default App;
