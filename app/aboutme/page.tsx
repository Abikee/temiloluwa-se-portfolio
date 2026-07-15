"use client"
import { monoton } from "../layout";
import { useState } from "react"
import { useRouter } from "next/navigation";
import {galindo} from "../layout";

export default function AboutMePage () {

 const [arrowClicked, setArrowClicked] = useState(false);
  const router = useRouter();

    return (

<div className="bg-[#F4F3E6] h-screen overflow-hidden ">
    
    <div className="text-[#F699CD]">
    <h1 className={`${monoton.className} text-5xl pt-6 pl-6`}>ABOUT ME</h1>
    </div>

    <div className="relative">
     <img
    src="/aboutmepics.png"
    alt="Temilolouwa"
    width={300}
    height={300}
    className="absolute left-46 bottom-50 rotate-[-12deg] z-0"
    ></img>
    
    <div className="relative p-8 z-10 ">
  <span className=" relative top-16 left-90 block text-8xl text-[#CB1D85]  ">
    “
  </span>

<div className="flex justify-end">
    <div className={`${galindo.className} text-[#CB1D85] text-sm mr-6 w-200 `}>
    <p>
    I'm Temiloluwa Akinrujomu, a Frontend Engineer who enjoys building designs that make digital experiences fluid.
</p>

<p>
    I believe every interface tells a story, and my objective is to make every engagement feel intuitive, responsive, and streamlined.
</p>

<p>
    I build web applications with React, Next.js, Tailwind, and JavaScript, which make my building and creative process enjoyable for people.
</p>

<p>
    My curiosity about people sets me apart because it makes me design visually appealing and user-centered, accessible experiences. I am always learning, experimenting with new ideas and new technologies that can help me build better products by equipping myself with the knowledge I have.
</p>

<p>
    Outside writing code, I enjoy storytelling through content creation, books, and also like having great conversations, which make me explore what people could like or want through their perspectives and experiences.
</p>

    </div>
    </div>
     <span className=" flex justify-end text-8xl text-[#CB1D85] -mt-6 mr-8">
    ”
  </span>
</div>
    </div>

<div>
    <div className="absolute right-10 bottom-6 text-white z-50">
        <button 
  onClick={() => {
    setArrowClicked(!arrowClicked)
    router.push("/skills")
  }}
  className={`flex items-center justify-center rounded-full border bg-[#CB1D85] w-12 h-12 ${arrowClicked ?"scale-125" : "scale-100" }`}>
<span className="material-symbols-outlined leading-none">
arrow_forward
</span>
  </button>
</div>

<div className="absolute left-8 bottom-6 text-white z-50">
  <button 
  onClick={() => {
    setArrowClicked(!arrowClicked)
    router.push("/home")
  }}
  className={`flex items-center justify-center rounded-full border bg-[#CB1D85] w-12 h-12 ${arrowClicked ?"scale-125" : "scale-100" }`}>
<span className="material-symbols-outlined">
arrow_back
</span>
</button>
</div>
</div>

</div>

    )}