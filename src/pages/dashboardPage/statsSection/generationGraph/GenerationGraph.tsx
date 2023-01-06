import React, { ReactElement } from 'react'
import {
  AreaChart, Area, XAxis,
  YAxis,
  Tooltip
} from 'recharts'
import { genGraphMockData } from '../../../../resources/genGraphMockData'

function GenerationGraph (): ReactElement {
  return (
      <AreaChart
          width={500}
          height={400}
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
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
  )
}

export default GenerationGraph
