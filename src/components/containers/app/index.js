import React from 'react';
import { Provider } from 'react-redux';
import store from '@store';
import Registration from '../registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../config/style.scss';

const App = () => (
  <Provider store={store}>
    <Registration />
  </Provider>
);

export default App;
