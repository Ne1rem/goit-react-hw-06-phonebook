import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'components/Phonebook/PhoneBookState';

// export const theme = {
//   colors: {
//     black: '#212121',
//     white: '#fff',
//     success: 'green',
//     warning: 'orange',
//     error: 'red',
//   },
// };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
