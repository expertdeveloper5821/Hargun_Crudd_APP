import { BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AppState from './Context/AppState.jsx'
import "./App.css"
import { store } from './Redux/store.js'
import {Provider} from "react-redux"

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AppState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppState>
  </Provider>
)
