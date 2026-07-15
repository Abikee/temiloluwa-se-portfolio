"use client"
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import {caveat} from "../layout"
import {bungee} from "../layout";
import { courgette } from "../layout";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function contactPage () {

  const [arrowClicked, setArrowClicked] = useState(false);
    const router = useRouter();

    return(

      
<div className="bg-[#F4F3E6] min-h-screen pt-20">
 <div className={`${caveat.className} text-xl text-center text-[#CB1D85]`}>
   <p> Whether you're launching a business, building a personal brand, or bringing a new product to life, I can help you actualize it.</p>
  <p> Feel free to get in touch with me.</p>
 </div>

 <h1 className={`${bungee.className} text-[#CB1D85] text-2xl mt-10 text-center`}>
    Ready to get started with your ideas ?
 </h1>

<div className="flex mt-14">
 <span className="text-[#494848] block ml-2 mt-7">SAY HELLO</span>

 
 <a href="mailto:temiloluwaakinrujomu90@gmail.com"
 className={`${courgette.className} hover:scale-105 hover:text-pink-500 border rounded-full bg-pink-200 ml-10 p-8`}
 >
  hi@temmy.dev
</a>
</div>

<div className=" flex gap-8 ml-6 mt-8 items-center justify-center">
    <a
  href="https://www.linkedin.com/in/temiloluwa-akinrujomu-579178178?trk=contact-info"
  className=" border rounded-lg p-5 bg-[#F699CD] rounded-lg hover:scale-120 text-2xl"
>
   <FaLinkedin />
</a>

<a
  href="https://www.instagram.com/_abikee_baby?igsh=MWdwNDF6bmZzanZlZg%3D%3D&utm_source=qr"
  className=" border rounded-lg p-5 text-2xl bg-[#F699CD] hover:scale-120"
>
     <FaInstagram />
</a>

<a
  href="https://x.com/teminikan_temi?s=11"
  className=" border rounded-lg p-5 text-2xl bg-[#F699CD] hover:scale-120"
>
 <FaXTwitter />
</a>

<a
  href="tel:+2349058244808"
  className=" border p-5 text-2xl bg-[#F699CD] rounded-lg hover:scale-120"
>
   <FaPhoneAlt />
</a>

</div>

<div className="text-xs flex items-center justify-center pt-4 ml-2">&copy; TEMILOLUWA AKINRUJOMU 2026</div>

<div>
 <div className="absolute right-10 bottom-6 text-white">
        <button 
  onClick={() => {
    setArrowClicked(!arrowClicked)
    router.push("/home")
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
    router.push("/projects")
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