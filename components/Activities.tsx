import { Box, Typography } from '@mui/material'
import { TbCategoryFilled } from 'react-icons/tb'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'

const Activities = () => {
  const steps = [
    {
      label: 'Outlines keep you honest. And keep structure',
    },
    {
      label: 'AEOL meeting',
    },
    {
      label: 'Make deposit',
    },
    {
      label: 'Indulging in poorly driving and keep structure keep great',
    },
    {
      label: 'New order placed',
    },
    {
      label: 'Indulging in poorly driving and keep structure keep great',
    },
    {
      label: 'New order placed',
    },
    {
      label: 'Finance KPI Mobile app launch preparion meeting',
    },
  ]

  return (
    <Box
      sx={{
        mt: 3,
        border: '1px solid #e0e0e0',
        borderRadius: '10px',
        px: 3,
        py: 3,
        flexDirection: 'column',
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
            Activities
          </Typography>
          <Typography
            sx={{ fontSize: '0.75rem', fontWeight: '500', color: '#99a1b7' }}
          >
            890,344 Sales
          </Typography>
        </Box>
        <TbCategoryFilled />
      </Box>
      <Box>
        <Stepper orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
              // optional={
              //   index === 2 ? (
              //     <Typography variant="caption">Last step</Typography>
              //   ) : null
              // }
              >
                {step.label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Box>
  )
}

export default Activities
