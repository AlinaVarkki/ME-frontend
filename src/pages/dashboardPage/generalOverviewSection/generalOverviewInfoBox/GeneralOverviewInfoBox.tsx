import './_GeneralOverviewInfoBox.scss'

import React, { ReactElement } from 'react'
import { Box, Typography } from '@mui/material'

interface GeneralOverviewInfoBoxI {
  valueDescription: string
  value: string
}

function GeneralOverviewInfoBox ({ valueDescription, value }: GeneralOverviewInfoBoxI): ReactElement {
  return (
      <Box className="infoBoxContainer">
          <Typography className="firstLine">
              {valueDescription}
          </Typography>
          <Typography className="secondLine">
              {value}
          </Typography>
      </Box>
  )
}

export default GeneralOverviewInfoBox
