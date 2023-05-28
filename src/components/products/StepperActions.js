import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProductDetailStepper from "./productDetailStepper"
import AddAddress from "./addAddress"
import OrderConfirm from "./orderConfirm"

export default function StepperActions(props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ['Items', 'Select Address', 'Confirm Order'];

  const handleNext = () => {
    if(activeStep===1){
      if(props.addressListIndex==-1)
        alert("Select address")
      else
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    else if(activeStep===steps.length-1){
      if(props.addressListIndex!=null)
      alert("submit")
      props.submit();
    }
    else{
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box style={{"margin-left":"150px"}} sx={{ width: '80%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === 0 ? (<ProductDetailStepper product={props.product} quantity={props.quantity} ></ProductDetailStepper>)
        : activeStep === 1 ? <><br></br><br></br><AddAddress address={props.address} addressListIndexChange={props.addressListIndexChange}></AddAddress></>
            : <OrderConfirm product={props.product} quantity={props.quantity} address={props.address[props.addressListIndex]}></OrderConfirm>
       }
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Place Order' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
