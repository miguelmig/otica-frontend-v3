'use client'
import { Button } from "@mui/material"
import {} from "react"

function LensesTypeContent() {
  return (
    <div className="flex-1 p-2">
      <div className="grid grid-cols-2 gap-4 min-h-full items-center justify-center">
        {["Cilindro", "Esfera"].map((item) => (
          <div key={item} className="bg-zinc-200  gap-4 flex-col flex-1 items-center justify-start shadow ring-2 shadow-slate-900 flex h-full  p-4 w-full min-h-16">
            <span className="text-center text-pretty text-xl">{item}</span>
            <textarea 
              className="flex w-16 h-8 justify-center text-center resize-none focus:ring-blue-400 focus:ring-3" 
              onChange={(e) => e.target.value = e.target.value.replace(/[^0-9-.]/g, '')}
              placeholder={`${item}`} 
            /> 
          </div>
        ))}
      </div>
    </div>
  )
}
  
export default LensesTypeContent