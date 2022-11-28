import React, { ReactElement } from 'react'
import { Grid, TextField, Typography, Autocomplete, InputAdornment, Button } from '@mui/material'
import './_SearchPage.scss'
import { postcodes } from '../../resources/postcodeExamples'
import SearchIcon from '@mui/icons-material/Search'

function SearchPage (): ReactElement {
  return (
        <div className="SearchPage">
            <img className="backgroundImage" src="https://i.ibb.co/17wQ2Vb/appolinary-kalashnikova-WYGh-TLym344-unsplash.jpg"/>
            <Grid
                container
                direction="column"
                className="content"
                alignItems="center"
                height="100vh"
                spacing={2}
            >
                <Grid item xs={3}>
                    <img className="imageIcon" src="https://www.energymutual.com/wp-content/uploads/2020/03/EM-1-cropped.svg" alt={'Energy Mutual Logo'}/>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h4" className="gridText" align="center" sx={{ fontWeight: 600 }}>
                        WELCOME TO ENERGY
                    <Typography variant="subtitle1" width={'80%'}>
                        Compare your energy production today with comprehensive statistics
                    </Typography>
                    </Typography>
                </Grid>
                <Grid item container xs={6}
                      direction="column"
                      alignItems="center">
                    <Autocomplete
                        className="postcodeSearch"
                        openOnFocus={false}
                        options={postcodes}
                        sx={{ width: 350 }}
                        renderInput={(params) =>
                            <TextField
                                {...params}
                                label="Postcode"
                                InputProps={{
                                  ...params.InputProps,
                                  startAdornment: <InputAdornment
                                      position="start"

                                  >
                                      <SearchIcon className="searchIcon" sx={{ marginLeft: 1 }}/>
                                  </InputAdornment>
                                }}
                            />}
                    />
                    {/* will move the Button css into the .scss later */}
                    <Button href="/results" variant="contained" sx={{ margin: 3, backgroundColor: '#2B3142', borderRadius: 20, fontWeight: 'bold', width: '120px' }}>Search</Button>
                </Grid>
            </Grid>
        </div>
  )
}

export default SearchPage
