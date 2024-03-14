'use client'
import { getLens } from "@/network/getLens"
import { Button } from "@mui/material"
import { useState } from "react"
import ModelCard from "./ModelCard"

function GraduationContent() {
  
  const [data, setData] = useState([])

  console.log(`data`, data)

  return (
    <div className="flex-1 p-2 overflow-hidden">
      <div className="grid grid-cols-2 gap-4 items-center justify-center">
        {["Cilindro", "Esfera"].map((item) => (
          <div key={item} className="bg-zinc-200 rounded-xl gap-4 flex-col flex-1 items-center justify-start shadow ring-2 shadow-slate-900 flex p-4 w-full min-h-16">
            <span className="text-center text-pretty text-xl">{item}</span>
            <textarea 
              className="flex rounded-md w-17 h-8 justify-center text-center resize-none focus:ring-blue-400 focus:ring-3" 
              onChange={(e) => {
                e.target.value = e.target.value.replace(/[^0-9-.]/g, '')
                getLens({cil: e.target.value, esf: e.target.value }).then((data) => {
                  console.log(`data`, data)
                  setData(data)
                })
              }}
              placeholder={`${item}`} 
            /> 
          </div>
        ))}
      </div>
      <div className="p-4 grid md:grid-cols-2 lg:grid-cols-4 gap-4 flex-1 items-center justify-center">
        {data?.length > 0 && 
        data.slice(0, 8).map((elem:any,i) => (
          <ModelCard 
            key={"model" + i}
            brand={elem.brand} 
            model={elem.model} 
            treatment={elem.treatment} diameter={elem.diameter} />
        ))
        }
        </div>
    </div>
  )
}
  
  export default GraduationContent