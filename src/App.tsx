import React, { ReactElement } from 'react'
import './App.scss'
import SearchPage from './pages/searchPage/SearchPage'

function App (): ReactElement {
  return (
    <div className="App">
        <SearchPage/>
    </div>
  )
}

export default App
