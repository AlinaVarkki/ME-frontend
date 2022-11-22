import React, { ReactElement } from 'react'
import { Grid, TextField, Typography } from '@mui/material'
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
                    <Typography variant="h4" className="gridText" align="center" sx={{ fontWeight: 600 }}>
                        WELCOME TO ENERGY
                    <Typography variant="subtitle1" width={'80%'}>
                        Compare your energy production today with comprehensive statistics
                    </Typography>
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Search location"
                        variant="filled"
                    />
                </Grid>
            </Grid>
        </div>
  )
}

export default SearchPage
