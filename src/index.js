import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import configureStore from './store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootEl = document.getElementById('root');

const store = configureStore();

const render = WrappedComponent =>
  // eslint-disable-next-line react/no-render-return-value
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <WrappedComponent />
      </Provider>
    </React.StrictMode>,
    rootEl
  );

render(App);

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('./App', async () => {
    const HotApp = await import('./App');

    render(HotApp);
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
