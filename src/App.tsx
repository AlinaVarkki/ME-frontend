import React, { ReactElement } from 'react'
import './App.scss'
import SearchPage from './pages/searchPage/SearchPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavigationDrawer from './navigationDrawer/NavigationDrawer'
import DashboardPage from './pages/dashboardPage/DashboardPage'
import MapsPage from './pages/mapsPage/MapsPage'
import AnalyticsPage from './pages/analyticsPage/AnalyticsPage'
import LeaderboardPage from './pages/leaderboardPage/LeaderboardPage'

function App (): ReactElement {
  return (
      <Router>
          {window.location.pathname !== '/' ? <NavigationDrawer/> : null}
            <Routes>
                <Route path="/" element={<SearchPage/>}/>
                <Route path="/Dashboard" element={<DashboardPage/>}/>
                <Route path="/Maps" element={<MapsPage/>}/>
                <Route path="/Analytics" element={<AnalyticsPage/>}/>
                <Route path="/Leaderboard" element={<LeaderboardPage/>}/>
            </Routes>
      </Router>
  )
}

export default App
