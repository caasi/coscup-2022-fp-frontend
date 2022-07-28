import { createStore } from 'redux'

import reducer from './reducers'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: Function
  }
}

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
