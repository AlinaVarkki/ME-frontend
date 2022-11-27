import React, { ReactElement } from 'react'
import { Grid, TextField, Typography, Autocomplete, InputAdornment } from '@mui/material'
import './_SearchPage.scss'
import { postcodes } from '../../resources/postcodeExamples'

function SearchPage (): ReactElement {
  return (
        <div className="SearchPage">
            <Grid
                container
                direction="column"
                alignItems="center"
                height="100vh"
                spacing={2}
            >
                <Grid item xs={3}>
                    <img className="imageIcon" src="https://www.energymutual.com/wp-content/uploads/2020/03/EM-1-cropped.svg"/>
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
                    <Autocomplete
                        disablePortal
                        className="postcodeSearch"
                        id="combo-box-demo"
                        options={postcodes}
                        sx={{ width: 300 }}
                        renderInput={(params) =>
                            <TextField
                                {...params}
                                label="Postcode"
                                InputProps={{
                                  ...params.InputProps,
                                  startAdornment: <InputAdornment position="start">kg</InputAdornment>
                                }}
                            />}
                    />
                </Grid>
            </Grid>
        </div>
  )
}

export default SearchPage
