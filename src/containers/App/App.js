import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../../store';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import { setAuthoriationToken, setCurrentUser } from '../../store/actions/auth';
import jwtDecode from 'jwt-decode';

const store = configureStore();

if(localStorage.jwtTokenn) {
  setAuthoriationToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
  } catch (error) {
    store.dispatch(setCurrentUser({}))
  }
}
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Navbar/>
          <Main/>
        </div>
      </Router>
    </Provider>
  );
};

export default App;