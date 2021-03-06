import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app';
import {Provider} from 'react-redux';
import appStoreCreate from './lib/app-store-create.js';

let store = appStoreCreate();

let AppContainer = () => {
  return(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<AppContainer />, document.getElementById('root'));
