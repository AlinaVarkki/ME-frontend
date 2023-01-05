import React, { ReactElement } from 'react'
import './App.scss'
import SearchPage from './pages/searchPage/SearchPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AnalysisPage from './pages/analysisPage/AnalysisPage'

function App (): ReactElement {
  return (
      <Router>
          {window.location.pathname !== '/' ? <AnalysisPage/> : null}
        <div className="App">
            <Routes>
                <Route path="/" element={<SearchPage/>}/>
                <Route path="/results" element={<AnalysisPage/>}></Route>
            </Routes>
        </div>
      </Router>
  )
}

export default App
