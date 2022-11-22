import React, { ReactElement } from 'react'
import { Button, Grid } from '@mui/material'
import './_SearchPage.scss'

function SearchPage (): ReactElement {
  return (
        <div className="SearchPage">
            <Grid
                container
                direction="column"
                alignItems="center"
                height="100vh"
            >
                <Grid item xs={3}>
                    <p className="grid">
                        Logo
                    </p>
                </Grid>
                <Grid item xs={3}>
                    <div>
                        WELCOME TO ENERGY
                    </div>
                    <div>
                        Compare your energy production today with comprehensive statistics
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="outlined">Outlined</Button>
                </Grid>
            </Grid>
        </div>
  )
}

export default SearchPage
