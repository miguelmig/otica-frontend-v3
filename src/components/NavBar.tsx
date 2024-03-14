'use client'
import { Button, Step, StepLabel, Stepper } from "@mui/material"
import React, {useState} from "react"
import GraduationContent from "./GraduationContent"

function NavBar() {
  const steps = [
    'Graduação',
    'Tipo das lentes',
    'Qualidade das lentes',
    'Tratamentos das lentes'
  ]

  const [activeStep, setActiveStep] = useState(0)

  function handleNext() {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  function handleBack() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  function handleReset() {
    setActiveStep(0)
  }

  let content: React.ReactElement | null = null
  if (steps[activeStep] === "Graduação") {
    content = <GraduationContent />
  }

  return (
    <div className="min-h-full p-5 flex flex-col justify-between">
      <Stepper
        activeStep={activeStep}
        alternativeLabel
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel className="text-white">{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="static flex flex-row gap-2">
        <Button
          variant="contained"
          onClick={handleBack}
          className="bg-zinc-500"
          color="primary">
          Anterior
        </Button>
        <Button 
          variant="contained"
          className="bg-zinc-500"
          onClick={handleNext}>
          Próximo
        </Button>
      </div>
    </div>
  )
}
  
export default NavBar