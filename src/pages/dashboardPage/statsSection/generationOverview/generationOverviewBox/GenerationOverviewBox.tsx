import './_GenerationOverviewBox.scss'

import React, { ReactElement } from 'react'
import { Typography } from '@mui/material'

import Brightness1OutlinedIcon from '@mui/icons-material/Brightness1Outlined'

interface GenerationOverviewInfoBoxI {
  valueDescription: string
  value: string
}

function GenerationOverviewBox ({ valueDescription, value }: GenerationOverviewInfoBoxI): ReactElement {
  return (
      <div className="genOverviewBoxContainer">
          <Brightness1OutlinedIcon className="valueIcon" fontSize="large"/>
          <Typography className="valueDescription">
              {valueDescription}
          </Typography>
          <Typography className="valueDescription" fontSize={22} fontWeight="bold">
              {value}
          </Typography>
      </div>
  )
}

export default GenerationOverviewBox
