import './_DownloadReport.scss'

import React, { ReactElement } from 'react'
import { Button, Typography } from '@mui/material'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'

function DownloadReport (): ReactElement {
  return (
      <div className="downloadReportContainer">
          <Typography className="downloadReportElement" fontSize={20} fontWeight="bold">
              Reach your energy goals faster
          </Typography>
          <Typography className="downloadReportElement">
            Use Energy to interpret and compare your electricity production to reach best performance
          </Typography>
          <Button
              variant="contained"
              startIcon={<FileDownloadOutlinedIcon/>}
              className="downloadButton downloadReportElement"
              style={{ backgroundColor: '#121733', marginTop: '10px', borderRadius: '30px' }}>
              Download Report
          </Button>
      </div>
  )
}

export default DownloadReport
