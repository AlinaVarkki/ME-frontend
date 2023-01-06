import React, { ReactElement } from 'react'
import './App.scss'
import SearchPage from './pages/searchPage/SearchPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavigationDrawer from './navigationDrawer/NavigationDrawer'
import DashboardPage from './pages/dashboardPage/DashboardPage'

function App (): ReactElement {
  return (
        <div className="App">
          <Router>
              {window.location.pathname !== '/' ? <NavigationDrawer/> : null}
                <Routes>
                    <Route path="/" element={<SearchPage/>}/>
                    <Route path="/Dashboard" element={<DashboardPage/>}/>
                </Routes>
          </Router>
        </div>
  )
}

export default App
