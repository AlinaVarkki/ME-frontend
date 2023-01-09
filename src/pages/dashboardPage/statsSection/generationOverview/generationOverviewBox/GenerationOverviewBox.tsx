import './_GenerationOverviewBox.scss'

import React, { ReactElement } from 'react'
import { Typography } from '@mui/material'

import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import DataUsageOutlinedIcon from '@mui/icons-material/DataUsageOutlined';
import { GenerationBoxColorsEnum, GenerationBoxIconsEnum } from '../GenerationOverview'
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';

interface GenerationOverviewInfoBoxI {
  valueDescription: string
  value: string
  backgroundColour: GenerationBoxColorsEnum
  icon: GenerationBoxIconsEnum
}

function GenerationOverviewBox ({ valueDescription, value, backgroundColour, icon }: GenerationOverviewInfoBoxI): ReactElement {
  const getIcon = (icon: GenerationBoxIconsEnum): ReactElement => {
    switch (icon) {
      case GenerationBoxIconsEnum.dashCircle:
        return <PowerSettingsNewOutlinedIcon className="valueIcon" fontSize="large"/>
      case GenerationBoxIconsEnum.partCircle:
        return <DataUsageOutlinedIcon className="valueIcon" fontSize="large"/>
      case GenerationBoxIconsEnum.fullCircle:
        return <CircleOutlinedIcon className="valueIcon" fontSize="large"/>
      default:
        return <CircleOutlinedIcon className="valueIcon" fontSize="large"/>
    }
  }

  return (
      <div className={backgroundColour === GenerationBoxColorsEnum.green ? 'genOverviewBoxContainer green' : 'genOverviewBoxContainer'}>
          {getIcon(icon)}
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
