"use client"
import{fredericka} from "../layout";
import {bungee} from "../layout";
import { useState } from "react"
import { useRouter } from "next/navigation";

export default function skillsPage () { 

    const [arrowClicked, setArrowClicked] = useState(false);
  const router = useRouter();

    return(
<div className=" bg-[#F4F3E6] min-h-screen relative">
   
     <h1  className={`${fredericka.className} absolute left-1/2 top-1/2 -transform -translate-x-1/2 -translate-y-1/2 text-[#CB1D85] text-5xl`}>
        My Tech stack
     </h1>
     

        <span className={`${bungee.className} absolute left-1/2 top-20 -translate-x-1/2 border px-4 py-2 rounded-full bg-[#FFA175]`}>
    Html
        </span>

        <span className={`${bungee.className} absolute right-60 top-32 border px-4 py-2 rounded-full bg-[#F4F3E6] bg-[#FFA175]`}>
            Javascript
        </span>

        <span className={`${bungee.className} absolute right-30 top-1/2 -translate-y-1/2 border px-4 py-2 rounded-full bg-[#F4F3E6] bg-[#FFA175] `}>
            React
        </span>

        <span className={`${bungee.className} absolute right-50 bottom-32 border px-4 py-2 rounded-full bg-[#F4F3E6] bg-[#FFA175]`}>
            Css
        </span>

        <span className={`${bungee.className} absolute left-1/2 bottom-20 -translate-x-1/2 border px-4 py-2 rounded-full bg-[#FFA175]`}>
            Tailwind
        </span>

        <span className={`${bungee.className} absolute left-50 bottom-32 border px-4 py-2 rounded-full bg-[#FFA175]`}>
            Next.js
        </span>

        <span className={`${bungee.className} absolute left-30 top-1/2 -translate-y-1/2 border px-4 py-2 rounded-full bg-[#FFA175]`}>
            Github
        </span>

        <span className={`${bungee.className} absolute left-60 top-32 border px-4 py-2 rounded-full bg-[#FFA175]`}>
            Typescript
        </span>

<div>
         <div className="absolute right-10 bottom-6 text-white">
  <button 
  onClick={() => {
    setArrowClicked(!arrowClicked)
    router.push("/projects")
  }}
  className={`flex items-center justify-center rounded-full border bg-[#CB1D85] w-12 h-12 ${arrowClicked ?"scale-125" : "scale-100" }`}>
<span className="material-symbols-outlined leading-none">
arrow_forward
</span>
  </button>
</div>

<div className="absolute left-8 bottom-6 text-white">
  <button 
  onClick={() => {
    setArrowClicked(!arrowClicked)
    router.push("/aboutme")
  }}
  className={`flex items-center justify-center rounded-full border bg-[#CB1D85] w-12 h-12 ${arrowClicked ?"scale-125" : "scale-100" }`}>
<span className="material-symbols-outlined">
arrow_back
</span>
</button>
</div>
</div>

     </div>

 )
}
