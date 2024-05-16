import Link from 'next/link'
// import Layout from '../components/Layout'

import * as React from 'react'
import { Container, Grid, Box, Typography } from '@mui/material'
import Category from '../components/Category'
import OrderTable from '../components/OrderTable'
import Activities from '../components/Activities'

const IndexPage = () => {
  return (
    <>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          mt: 2,
          width: '100%',
          fontFamily: 'Rubik',
          overflow: 'auto',
        }}
      >
        <Grid container spacing={4}>
          <Grid item sm={12} md={8}>
            <Box sx={{ flexDirection: 'column' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mt: 3,
                  gap: 2,
                  '& .MuiTypography-root': {
                    fontWeight: '600',
                    fontSize: '14px',
                    color: '#99a1b7',
                  },
                }}
              >
                <Category />
              </Box>
              <OrderTable />
            </Box>
          </Grid>
          <Grid item sm={12} md={4}>
            <Activities />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default IndexPage
