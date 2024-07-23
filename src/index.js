import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material';
import { Provider } from 'react-redux';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import store from './Store/store';

i18n.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      translation: {
        'welcomeMessage': 'Welcome to my app!'
      }
    },
    fr: {
      translation: {
        'welcomeMessage': 'Bienvenue dans mon application !'
      }
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </StyledEngineProvider>
      </Provider>
    </React.StrictMode>
  </I18nextProvider>,

);
