import * as React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { RiArrowRightLine } from 'react-icons/ri'
import { rows } from '../constants/rows'

const OrderTable = () => {
  return (
    <Box
      sx={{
        border: '1px solid #e0e0e0',
        borderRadius: '10px',
        px: '30px',
        py: '20px',
        flexDirection: 'column',
        color: '#071437',
        mt: 5,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '15px',
        }}
      >
        <Box sx={{ flexDirection: 'column' }}>
          <Typography
            sx={{ fontSize: '1.15rem', fontWeight: '600', color: '#071437' }}
          >
            Latest Products
          </Typography>
          <Typography
            sx={{ fontSize: '0.75rem', fontWeight: '500', color: '#99a1b7' }}
          >
            More than 400 new products
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            '& .MuiBox-root': {
              fontSize: '0.75rem',
              fontWeight: '600',
            },
          }}
        >
          <Box
            sx={{
              color: '#071437',
              backgroundColor: '#f1f1f4',
              borderRadius: '10px',
              padding: '10px',
            }}
          >
            Month
          </Box>
          <Box sx={{ color: '#99a1b7' }}>Week</Box>
          <Box sx={{ color: '#99a1b7' }}>Day</Box>
        </Box>
      </Box>
      {rows.map((item: any, index) => {
        return (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: '15px',
              py: '15px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 3,
              }}
            >
              <img src={item.icon} alt="logo" width={25} height={40} />
              <Box sx={{ flexDirection: 'column' }}>
                <Typography
                  sx={{ fontSize: '14px', fontWeight: '600', color: '#071437' }}
                >
                  {item.title1}
                </Typography>
                <Typography
                  sx={{ fontSize: '13px', fontWeight: '600', color: '#99a1b7' }}
                >
                  {item.title2}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <Typography
                sx={{ fontSize: '13px', fontWeight: '600', color: '#99a1b7' }}
              >
                {item.tech}
              </Typography>
              <Box
                sx={{
                  backgroundColor: '#dfffea',
                  color: '#17c653',
                  fontSize: '12px',
                  fontWeight: '500',
                  px: '3px',
                  py: '2px',
                  borderRadius: '3px',
                }}
              >
                {item.status}
              </Box>
              <RiArrowRightLine />
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}

export default OrderTable
