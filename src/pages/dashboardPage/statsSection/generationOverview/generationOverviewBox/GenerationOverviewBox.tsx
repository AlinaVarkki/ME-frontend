import './_GenerationOverviewBox.scss'

import React, { ReactElement } from 'react'
import { Typography } from '@mui/material'

import Brightness1OutlinedIcon from '@mui/icons-material/Brightness1Outlined'

type GenerationBoxColors = 'green' | 'blue'

interface GenerationOverviewInfoBoxI {
  valueDescription: string
  value: string
  backgroundColour: GenerationBoxColors
}

function GenerationOverviewBox ({ valueDescription, value, backgroundColour }: GenerationOverviewInfoBoxI): ReactElement {
  return (
      <div className={backgroundColour === 'green' ? 'genOverviewBoxContainer green' : 'genOverviewBoxContainer'}>
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
