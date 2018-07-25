import React from 'react'

import {Navbar, Header} from './components'
import Routes from './routes'
// meaningless change


const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes />
      <Navbar />
    </div>
  )
}

export default App
