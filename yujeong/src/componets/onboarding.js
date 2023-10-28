import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import MobileStepper from '@mui/material/MobileStepper';
import { Link } from 'react-router-dom';
import '../App.css';

function SwipeableOnboardingStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const isLastStep = activeStep === 2;

  const renderStep = (step: number) => {
    switch (step) {
      case 0:
        return (
          <div className='onboardingBox'>
            <Paper elevation={3} sx={{ padding: 2,height:'35em' }}>
                <h1>첫번째 페이지</h1>
                <input type='text'></input>
            </Paper>
          </div>

          
        );
      case 1:
        return (
          <div className='onboardingBox'>  
            <Paper elevation={3} sx={{ padding: 2,height:'35em' }}>
              <Typography variant="h5" gutterBottom>
                두 번째 페이지
              </Typography>
              {/* 여섯 개의 체크박스 */}
              <label>
                <input type="checkbox" />
                체크박스 1
              </label>
              {/* 나머지 체크박스들도 유사하게 만듭니다. */}
            </Paper>
          </div>
        );
      case 2:
        return (
          <div className='onboardingBox'>
            <Paper elevation={3} sx={{ padding: 2,height:'35em' }}>
              <Typography variant="h5" gutterBottom>
                세 번째 페이지
              </Typography>
              {/* 세 개의 체크박스 */}
              <label>
                <input type="checkbox" />
                체크박스 1
              </label>
              {/* 나머지 체크박스들도 유사하게 만듭니다. */}
            </Paper>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='onboarding'>
    <Typography>{renderStep(activeStep)}</Typography>
    <MobileStepper
      variant="dots"
      steps={3}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 1 }}
      nextButton={
        <Button size="small" onClick={isLastStep ? null : handleNext} disabled={isLastStep}>
          {isLastStep ? 'Finish' : 'Next'}
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
      }
    />
    {isLastStep && (
      <Button
        style={{ textAlign: 'center' }}
        component={Link}
        to="/chat" 
        variant="contained"
        color="primary"
      >
        Finish
      </Button>
    )}
  </div>
  );
}

export default SwipeableOnboardingStepper;
