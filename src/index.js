import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import 'tachyons'
import App from './container/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { searchRobots } from './reducers'

const logger = createLogger()
const store = createStore(searchRobots, applyMiddleware(logger))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)

serviceWorker.unregister()
