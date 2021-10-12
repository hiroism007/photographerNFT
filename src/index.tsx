import * as React from 'react'
import { render } from 'react-dom'
import * as ReactRedux from 'react-redux'
import * as History from 'history'
import Route from './route'
import * as Store from './store'
import * as Toast from './provider/Toast'

export const history = History.createBrowserHistory()
const store = Store.createStore(history)

const App = () => (
  <ReactRedux.Provider store={store}>
        <Toast.Provider>
          <Route history={history} />
        </Toast.Provider>
  </ReactRedux.Provider>
)

render(<App />, document.getElementById('root'))
