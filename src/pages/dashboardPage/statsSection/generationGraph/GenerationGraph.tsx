import './_GenerationGraph.scss'

import React, { ReactElement } from 'react'
import {
  AreaChart, Area, XAxis,
  YAxis,
  Tooltip, ResponsiveContainer
} from 'recharts'
import { genGraphMockData } from '../../../../resources/genGraphMockData'
import { Box } from '@mui/material'

function GenerationGraph (): ReactElement {
  const graph = (
        <AreaChart
            className="graph"
            data={genGraphMockData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}
        >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip cursor={{ stroke: '#121733', strokeWidth: 2 }} />
            <Area
                type="monotone"
                dataKey="uv"
                stroke='#33ddac'
                strokeWidth={3}
                fill='#adf1de'
                activeDot={{ stroke: '#121733', strokeWidth: 4, fill: '#33ddac', r: 7 }}
            />
        </AreaChart>
  )

  return (
      <>
      <Box sx={{ display: { xs: 'block', md: 'block', lg: 'none' } }}>
          <ResponsiveContainer width="100%" height={340}>
              {graph}
          </ResponsiveContainer>
      </Box>
    <Box className="graphWrapper" sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }}>
          <ResponsiveContainer height={340}>
              {graph}
          </ResponsiveContainer>
      </Box>
      </>
  )
}

export default GenerationGraph
