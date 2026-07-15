"use client"
import {bungee} from "../layout";
import { wallpoet } from "../layout";
import { useState } from "react"
import { useRouter } from "next/navigation";
import {cutiveMono} from "../layout"

export default function projectPage () {

 const [arrowClicked, setArrowClicked] = useState(false);
  const router = useRouter();

    return (
        <div className="bg-[#F4F3E6] min-h-screen">
        <div className={`${bungee.className} text-[#CB1D85] text-4xl flex items-center justify-center mt-6`}>
            FEATURED PROJECT
        </div>

<div className=" grid grid-cols-2 gap-8 justify-items-center mt-7">

        <div className={`${wallpoet.className} border rounded-xl p-4 w-100 h-40 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border-[#E6E3D2] text-[#CB1D85] m-4`}>
            <h3 className="mb-2">Txrnxp</h3>
            <div className="flex text-sm gap-6 mb-2">
                <span>•NEXTJS </span>
                <span> •TYPESCRIPT </span>
                <span> •TAILWIND</span>
                    </div> 
            <p>A tickecting platform</p>
            <div className={`${cutiveMono.className} text-black mt-6`}>
                <a
                href= "https://whats-happening.txrnxp.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleATB7dxwZG9mAmV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp2Tt0qxvW0H_eXc4Ewn7X0iuBuTeCIHoshd_NVnA3L8qpZOpukS1ErYYmZYA_aem_n30c2gIs2uXJ2BgQu_bBYg"
                className="inline-flex items-center gap-2 transition-all duration-300 hover:scale-110 hover:text-[#CB1D85]"
                >
                
                <span className="material-symbols-outlined "
                style={{ fontSize: "14px" }}
                >
                open_in_full
                </span>
                 view
                </a>
            </div>
        </div>

          <div className={`${wallpoet.className} border rounded-xl p-4 w-100 h-40 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border-[#E6E3D2] text-[#CB1D85] m-4`}>
            <h3 className="mb-2">zuimi</h3>
            <div className="flex text-sm gap-6 mb-2">
            <span>•NEXTJS </span>
            <span>•TYPESCRIPT</span>
            <span> •SCSS</span>
            </div>
            <p>Creative website for streaming film</p>

            <div className={`${cutiveMono.className} text-black mt-6`}>
                <a
                href= "https://github.com/Zuimi-com/zuimi_frontend"
                className="inline-flex items-center gap-2 transition-all duration-300 hover:scale-110 hover:text-[#CB1D85]"
                >
                
                <span className="material-symbols-outlined "
                style={{ fontSize: "14px" }}
                >
                open_in_full
                 </span>
                  view
                 </a>
            </div>
        </div>


         <div className={`${wallpoet.className} border rounded-xl p-4 w-100 h-40 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border-[#E6E3D2] text-[#CB1D85] m-4`}>
            <h3 className="mb-2">Travel And Tour</h3>
            <div className="flex text-sm gap-6 mb-2">
            <span>•REACT</span>
            <span> •TYPESCRIPT</span>
            <span> •TAILWIND</span>
            </div>
            <p className="text-xs">Replication of a website used for booking flight, touring and making reservation</p>

            <div className={`${cutiveMono.className} text-black mt-4`}>
                <a
                href= "https://github.com/Abikee/travel-website"
                className="inline-flex items-center gap-2 transition-all duration-300 hover:scale-110 hover:text-[#CB1D85]"
                >
                
                <span className="material-symbols-outlined "
                style={{ fontSize: "14px" }}
                >
                open_in_full
                 </span>
                  view
                 </a>
            </div>
        </div>

         <div className={`${wallpoet.className} border rounded-xl p-4 w-100 h-40 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border-[#E6E3D2] text-[#CB1D85] m-4`}>
            <h3 className="mb-2">Portfolio</h3>
            <div className="flex text-sm gap-6 mb-2">
            <span>•NEXTJS </span>
            <span>•JAVASCRIPT </span>
        </div>
            <p className="text-xs">Creative website for the accumulation of my work</p>

<div className={`${cutiveMono.className} text-black mt-6`}>
                <a
                href= "https://whats-happening.txrnxp.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleATB7dxwZG9mAmV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp2Tt0qxvW0H_eXc4Ewn7X0iuBuTeCIHoshd_NVnA3L8qpZOpukS1ErYYmZYA_aem_n30c2gIs2uXJ2BgQu_bBYg"
                className="inline-flex items-center gap-2 transition-all duration-300 hover:scale-110 hover:text-[#CB1D85]"
                >
                
                <span className="material-symbols-outlined "
                style={{ fontSize: "14px" }}
                >
                open_in_full
                 </span>
                  view
                 </a>
            </div>
        </div>

        </div>

<div>
 <div className="absolute right-10 bottom-6 text-white">
        <button 
  onClick={() => {
    setArrowClicked(!arrowClicked)
    router.push("/contactme")
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
    router.push("/skills")
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