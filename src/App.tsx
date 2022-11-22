import React, { ReactElement } from 'react'
import './App.scss'
import { Button } from '@mui/material'

function App (): ReactElement {
  return (
    <div className="App">
        <p>
          ME frontend
        </p>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
    </div>
  )
}

export default App
