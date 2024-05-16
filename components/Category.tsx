import { Box, Typography } from '@mui/material'
import { contents } from '../constants/contents'

const Category = () => {
  return (
    <>
      {contents.map((item: any, index) => {
        return (
          <Box
            key={index}
            sx={{
              flexDirection: 'column',
              justifyContent: 'center',
              border: '1px solid #e0e0e0',
              borderRadius: '10px',
              paddingX: '30px',
              paddingY: '45px',
              '& .MuiBox-root': {
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                textAlign: 'center',
              },
            }}
          >
            <Box>{item.icon}</Box>
            <Box
              sx={{
                flexDirection: 'column',
                mt: 2,
              }}
            >
              <Box>
                <Typography>{item.title1}</Typography>
              </Box>
              <Box>
                <Typography>{item.title2}</Typography>
              </Box>
            </Box>
          </Box>
        )
      })}
    </>
  )
}

export default Category
