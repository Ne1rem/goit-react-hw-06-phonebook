const { createSlice } = require("@reduxjs/toolkit");

const slice = createSlice({
    name: 'contact',
    initialState: {
    contacts :  [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'}, 
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ]},
    reducers: {
        newContact(state, action) {
            state.contacts.push(action.payload);
        },
        deleteContact(state,action) {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        }
    }
})

export const contactsReducer = slice.reducer
export const {newContact,deleteContact} = slice.contact