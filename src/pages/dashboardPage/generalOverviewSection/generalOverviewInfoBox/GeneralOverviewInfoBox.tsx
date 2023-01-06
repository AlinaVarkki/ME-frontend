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
          <Typography fontSize={16}>
              {valueDescription}
          </Typography>
          <Typography className="secondLine" fontWeight={'bold'} fontSize={18}>
              {value}
          </Typography>
      </Box>
  )
}

export default GeneralOverviewInfoBox
