import './_GeneralOverviewInfoBoxes.scss'

import React, { ReactElement } from 'react'
import GeneralOverviewInfoBox from '../generalOverviewInfoBox/GeneralOverviewInfoBox'

function GeneralOverviewInfoBoxes (): ReactElement {
  return (
      <div className="infoBoxesContainer">
          <GeneralOverviewInfoBox topLine={'Asset Owner'} bottomLine={'ACME Inc.'}/>
          <GeneralOverviewInfoBox topLine={'Installation Type'} bottomLine={'Hydropower'}/>
          <GeneralOverviewInfoBox topLine={'Installation Capacity'} bottomLine={'500'}/>
          <GeneralOverviewInfoBox topLine={'Capacity Group'} bottomLine={'"0-50kW" (group 1)'}/>
          <GeneralOverviewInfoBox topLine={'Commissioned'} bottomLine={'2017'}/>
          <GeneralOverviewInfoBox topLine={'Ofgem GEN ID'} bottomLine={'R000000'}/>
          <GeneralOverviewInfoBox topLine={'Location (Lat/Long)'} bottomLine={'TBD'}/>
          <GeneralOverviewInfoBox topLine={'DNO Region'} bottomLine={'SSEN'}/>
      </div>
  )
}

export default GeneralOverviewInfoBoxes
