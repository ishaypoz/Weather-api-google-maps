import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromis from 'redux-promise';
import App from './components/app';
import reducers from './reducers';
import './styles/style.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromis)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App />
	</Provider>,
	document.getElementById('root')
);
