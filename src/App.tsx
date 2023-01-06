import React, { ReactElement } from 'react'
import './App.scss'
import SearchPage from './pages/searchPage/SearchPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavigationDrawer from './pages/navigationDrawer/NavigationDrawer'
import Dashboard from './pages/dashboard/Dashboard'

function App (): ReactElement {
  return (
        <div className="App">
          <Router>
              {window.location.pathname !== '/' ? <NavigationDrawer/> : null}
                <Routes>
                    <Route path="/" element={<SearchPage/>}/>
                    <Route path="/Dashboard" element={<Dashboard/>}/>
                </Routes>
          </Router>
        </div>
  )
}

export default App
