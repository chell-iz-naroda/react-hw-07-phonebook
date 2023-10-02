import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { App } from 'components/App';

import { GlobalStyle } from 'components/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
        <GlobalStyle />
    </Provider>
  </React.StrictMode >
);
