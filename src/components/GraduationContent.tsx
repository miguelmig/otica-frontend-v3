'use client'
import { getLens } from "@/network/getLens"
import { TextareaHTMLAttributes, useState } from "react"
import ModelCard, { ModelCardProps } from "./ModelCard"
import _ from 'lodash';

const vars = ["Cilindro", "Esfera"]

function GraduationContent() {
  
  const [data, setData] = useState<ModelCardProps[]>([])

  console.log(`data`, data)

  const debouncedOnChange = _.debounce(() => {
    let cilElem = document.getElementById(vars[0]) as unknown as TextareaHTMLAttributes<HTMLTextAreaElement>;
    let esfElem = document.getElementById(vars[1]) as unknown as TextareaHTMLAttributes<HTMLTextAreaElement>;
    if (cilElem && esfElem) {
      cilElem.value = cilElem.value?.toString().replace(/[^0-9-.]/g, '')
      esfElem.value = esfElem.value?.toString().replace(/[^0-9-.]/g, '')
      getLens({cil: cilElem.value ?? '0.0', esf: esfElem.value ?? '0.0' }).then((data) => {
        console.log(`data`, data)
        setData(data)
      })
    }
    
  }, 1000)

  const handleChange = (event : any) => {
    debouncedOnChange();
  };

  return (
    <div className="flex-1 p-2 overflow-hidden">
      <div className="grid mt-8 grid-cols-2 gap-4 items-center justify-center">
        {vars.map((item) => (
          <div key={item} className="bg-zinc-300 rounded-xl gap-4 flex-col flex-1 items-center justify-start shadow ring-2 shadow-slate-900 flex p-4 w-full min-h-16">
            <span className="text-center text-pretty text-xl">{item}</span>
            <textarea 
              className="flex rounded-md w-16 h-8 justify-center text-center resize-none focus:ring-blue-400 focus:ring-3" 
              id={item}
              onChange={handleChange}
              placeholder={`0.0`} 
            /> 
          </div>
        ))}
      </div>
      <div className="p-4 grid md:grid-cols-2 lg:grid-cols-4 gap-4 flex-1 items-center justify-center">
        {data?.length > 0 && 
        data.slice(0, 8).map((elem:ModelCardProps,i) => (
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