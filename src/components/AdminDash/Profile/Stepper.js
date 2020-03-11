import React from 'react'
import {
  Stepper,
  Step,
  StepWrapper,
  StepLabel,
  StepConnector,
} from './profileStyles'

const StepperComponent = props => {
  return (
    <Stepper>
      <Step>
        <StepWrapper>
          <StepLabel active>1</StepLabel>
          <p>Application</p>
        </StepWrapper>
        <StepConnector width='45%' />
      </Step>
      <Step>
        <StepWrapper>
          <StepLabel>2</StepLabel>
          <p>Background Check</p>
        </StepWrapper>
        <StepConnector width='20%' />
      </Step>
      <Step>
        <StepWrapper>
          <StepLabel>3</StepLabel>
          <p>Training</p>
        </StepWrapper>
        <StepConnector width='50%' />
      </Step>
      <Step>
        <StepWrapper>
          <StepLabel>4</StepLabel>
          <p>Match</p>
        </StepWrapper>
      </Step>
    </Stepper>
  )
}

export default StepperComponent
