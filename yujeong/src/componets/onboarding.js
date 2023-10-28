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
                <h1>Create an Account</h1>
                <input type='text' placeholder='학교'></input><br />
                <input type='text' placeholder='이름'></input><br />
                <input type='text' placeholder='성별'></input><br />
            </Paper>
          </div>

          
        );
      case 1:
        return (
          <div className='onboardingBox'>  
            <Paper elevation={3} sx={{ padding: 2,height:'35em' }}>
              <Typography variant="h5" gutterBottom>
                Your Keyword
              </Typography>
              <label>
                <input type="checkbox" />
                내향적
              </label>
              <label>
                <input type="checkbox" />
                외향적
              </label>
              <label>
                <input type="checkbox" />
                활동적인
              </label>
              <br />
              <label>
                <input type="checkbox" />
                전문적인
              </label>
              <label>
                <input type="checkbox" />
                열정적인
              </label>
              <label>
                <input type="checkbox" />
                낙관적
              </label>
              <br />
              <label>
                <input type="checkbox" />
                계획적
              </label>
            
            </Paper>
          </div>
        );
      case 2:
        return (
          <div className='onboardingBox'>
            <Paper elevation={3} sx={{ padding: 2,height:'35em' }}>
              <Typography variant="h5" gutterBottom>
                Choice AI
              </Typography>
              <label>
                <input type="checkbox" />
                이보나
              </label>
              <label>
                <input type="checkbox" />
                유진
              </label>
              <label>
                <input type="checkbox" />
                이호창
              </label>
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
