import React, { ReactElement } from 'react'
import './_UnderConstruction.scss'
import { Box, Typography } from '@mui/material'
import ConstructionIcon from '@mui/icons-material/Construction'

function UnderConstruction ({ pageName }: { pageName: string }): ReactElement {
  return (
      <Box className="containerUnderConstruction">
          <Typography variant="h5" className="pageName" fontWeight="bold">
            {pageName} page
          </Typography>
          <Typography variant="h4" align="center">
              Under Construction
          </Typography>
          <ConstructionIcon className="underConstructionIcon" fontSize="large"/>
      </Box>
  )
}

export default UnderConstruction
