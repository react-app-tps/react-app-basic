import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Layout from 'components/layout/Index'
import { store } from './store/store'
import GlobalStyle from './GlobalStyle'
import './mock/index'

function App() {
  return (
    <ReduxProvider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ReduxProvider>
  )
}

export default App
