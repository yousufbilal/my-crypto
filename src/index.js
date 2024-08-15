import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material';
import { Provider } from 'react-redux';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import store from './Store/store';
import common_en from "../src/translations/en/common.json"
import common_fn from "../src/translations/fn/common.json"
import i18next from 'i18next';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',                             
  resources: {
    en: {
      common: common_en              
    },
    de: {
      common: common_fn
    },
  },
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
