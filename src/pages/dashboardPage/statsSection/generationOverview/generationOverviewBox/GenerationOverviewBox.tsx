import './_GenerationOverviewBox.scss'

import React, { ReactElement } from 'react'
import { Typography } from '@mui/material'

import Brightness1OutlinedIcon from '@mui/icons-material/Brightness1Outlined';

function GenerationOverviewBox (): ReactElement {
  return (
      <div className="genOverviewBoxContainer">
          <Brightness1OutlinedIcon className="valueIcon" fontSize="large"/>
          <Typography className="valueDescription">
              Total Generation
          </Typography>
          <Typography className="valueDescription" fontSize={22} fontWeight="bold">
              200MWh
          </Typography>
      </div>
  )
}

export default GenerationOverviewBox
