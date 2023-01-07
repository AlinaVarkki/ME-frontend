import './_StatsSection.scss'

import React, { ReactElement } from 'react'
import GenerationGraph from './generationGraph/GenerationGraph'
import DownloadReport from './downloadReport/DownloadReport'
import GenerationOverview from './generationOverview/GenerationOverview'
import { Box } from '@mui/material'

function StatsSection (): ReactElement {
  return (
      <>
      <Box
          sx={{ display: { xs: 'block', md: 'block', lg: 'none' } }}
      >
          <GenerationGraph/>
          <GenerationOverview/>
          <DownloadReport/>
      </Box>
      <Box
          sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }}
      >
          <div className="graphAndOverviewSection">
              <div>
                <GenerationGraph/>
                <DownloadReport/>
              </div>
              <GenerationOverview/>
          </div>
      </Box>
      </>
  )
}

export default StatsSection
