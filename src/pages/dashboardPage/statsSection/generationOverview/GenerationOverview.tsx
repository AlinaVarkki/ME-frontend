import './_GenerationOverview.scss'

import React, { ReactElement } from 'react'
import GenerationOverviewBox from './generationOverviewBox/GenerationOverviewBox'

export enum GenerationBoxColorsEnum {
  green = 'green',
  blue = 'blue'
}

export enum GenerationBoxIconsEnum {
  dashCircle = 'dashCircle',
  partCircle = 'partCircle',
  fullCircle = 'fullCircle'
}

const generationOverviewInfo = [
  {
    valueDescription: 'Total Generation',
    icon: GenerationBoxIconsEnum.dashCircle,
    value: '200MWh'
  },
  {
    valueDescription: 'Current Month Generation',
    icon: GenerationBoxIconsEnum.partCircle,
    value: '1MWh'
  },
  {
    valueDescription: 'Average Load Factor',
    icon: GenerationBoxIconsEnum.fullCircle,
    value: '84%'
  }
]

function GenerationOverview (): ReactElement {
  return (
      <div className="GenerationOverviewContainer">
          {
              generationOverviewInfo.map((genOverviewItem, index) => (
                  <GenerationOverviewBox
                      key={index}
                      value={genOverviewItem.value}
                      valueDescription={genOverviewItem.valueDescription}
                      backgroundColour={index === generationOverviewInfo.length - 1 ? GenerationBoxColorsEnum.green : GenerationBoxColorsEnum.blue}
                      icon={genOverviewItem.icon}
                  />
              ))
          }
      </div>
  )
}

export default GenerationOverview
