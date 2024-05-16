import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Container } from '@mui/material'
import { HiOutlineMenu } from 'react-icons/hi'
import { BiSolidNotification } from 'react-icons/bi'
import { BsSunFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import Divider from '@mui/material/Divider'

const Header = () => {
  return (
    <AppBar
      position="relative"
      elevation={0}
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        py: 2,
        px: 5,
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      <Toolbar>
        <Container>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <HiOutlineMenu size={28} color="black" />
              <img
                src="https://preview.keenthemes.com/metronic8/demo18/assets/media/logos/default-small.svg"
                alt="logo"
                width={45}
                height={45}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <BiSolidNotification size={28} color="black" />
              <BsSunFill size={28} color="black" />
              <CgProfile size={28} color="black" />
            </Box>
          </Box>
          {/* <Divider
            component="li"
            sx={{ width: '100vw', position: 'absolute' }}
          /> */}
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Header
