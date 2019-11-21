import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/App';
import GlobalStyles from 'styles/globals'
import * as serviceWorker from './serviceWorker';

const renderApp = () => {

  if (process.env.NODE_ENV !== 'production') {
    console.log('Hello');
  }

  ReactDOM.render(
    <div>
      <GlobalStyles />
      <App />
    </div>,
    document.getElementById('root')
  );
}

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
