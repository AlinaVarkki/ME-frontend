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
          sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }}
      >
          <div className="graphAndOverviewSection">
              <div className="graphWrapperNoFlex">
                <GenerationGraph/>
      <DownloadReport/>
              </div>
              <GenerationOverview/>
          </div>
      </Box>
      <Box
          sx={{ display: { xs: 'block', md: 'block', lg: 'none' } }}
      >
          <div className="graphWrapperNoFlex">
            <GenerationGraph/>
          </div>
          <GenerationOverview/>
          <DownloadReport/>
      </Box>
      </>
  )
}

export default StatsSection
