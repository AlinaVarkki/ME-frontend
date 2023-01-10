import './_CompareSitesButton.scss'
import React, { ReactElement } from 'react'
import { Button } from '@mui/material'
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';

function CompareSitesButton (): ReactElement {
  return (
      <div className="buttonContainer">
           <Button className="bt" endIcon={<CompareArrowsOutlinedIcon/>}>
              Compare Site
          </Button>
      </div>
  )
}

export default CompareSitesButton
