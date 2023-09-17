import React from 'react';
import { PhoneForm } from './Components/PhoneForm';
import { FormList } from './Components/FormList';
import { Container } from './App.style';


export const App = () => {

  return (
    <Container>
      <PhoneForm />
      <FormList /> 
    </Container>
  );
};

export default App;
