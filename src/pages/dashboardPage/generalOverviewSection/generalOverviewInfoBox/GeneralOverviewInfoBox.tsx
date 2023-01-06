import './_GeneralOverviewInfoBox.scss'

import React, { ReactElement } from 'react'
import { Box, Typography } from '@mui/material'

interface GeneralOverviewInfoBoxI {
  topLine: string
  bottomLine: string
}

function GeneralOverviewInfoBox ({ topLine, bottomLine }: GeneralOverviewInfoBoxI): ReactElement {
  return (
      <Box className="infoBoxContainer">
          <Typography fontSize={16}>
              {topLine}
          </Typography>
          <Typography className="secondLine" fontWeight={'bold'} fontSize={18}>
              {bottomLine}
          </Typography>
      </Box>
  )
}

export default GeneralOverviewInfoBox
