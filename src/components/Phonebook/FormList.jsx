import React from 'react';
import { ContactFilter } from './ContactFilter';
import { useDispatch } from 'react-redux';
import { deleteContact } from './PhoneSlice';
import { findContacts } from './FilterSlice';



export const ListItem = ({ contacts, contactFilter }) => {
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactFilter.toLowerCase())
  );

  return (
    <div>
      <ContactFilter onChange={() => dispatch(findContacts(value))} value={contactFilter} />
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
          </li>
        ))} 
      </ul>
    </div>
  );
};
