import './_CompareSitesButton.scss'
import React, { ReactElement } from 'react'
import { Button } from '@mui/material'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'

function CompareSitesButton (): ReactElement {
  return (
      <div className="buttonContainer">
           <Button variant="contained" sx={{
             backgroundColor: '#1C7A5F',
             borderRadius: 20,
             fontWeight: 'bold',
             fontSize: 13,
             width: '180px'
           }}
           endIcon={<FileDownloadOutlinedIcon/>}>
              Compare Site
          </Button>
      </div>
  )
}

export default CompareSitesButton
