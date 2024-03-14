'use client'
import GraduationContent from "@/components/GraduationContent"
import LensesTypeContent from "@/components/LensesTypeContent"
import { Button, Step, StepLabel, Stepper } from "@mui/material"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import React, {useState} from "react"

function Page() {
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
  } else if(steps[activeStep] === "Tipo das lentes") {
    content = <LensesTypeContent />
  }

  return (
    <main>
      <div className="min-h-screen overflow-hidden p-5 flex flex-col">
        <Stepper
          activeStep={activeStep}
          
          alternativeLabel
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        
        <div id="content" className="flex flex-1 debugContainer">
            {content}
        </div>
      </div>
      <div className="fixed bottom-2 min-w-full max-h-full flex justify-center gap-2">
        <Link
          onClick={handleBack}
          href="#"
          className="bg-zinc-500 text-white rounded-full flex justify-center items-center size-12">
          <ChevronLeftIcon />
        </Link>
        <Link 
          href="#"
          className="bg-zinc-500 text-white rounded-full flex justify-center items-center size-12"
          onClick={handleNext}>
          <ChevronRightIcon className="color-white" />
        </Link>
      </div>
    </main>
  )
}
  
export default Page