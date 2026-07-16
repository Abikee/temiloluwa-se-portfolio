"use client"
import {dancingScript} from "../app/layout"
import {changaOne} from "../app/layout"
import { useState } from "react"
import { useRouter } from "next/navigation";
import DownloadCV from "@/components/downloadcv";
import Sidebar from "@/components/sidebar";

const Home = () => {
  
  const [clickedButton, setClickedButton] = useState("");
  const [rotatedButton, setRotatedButton] = useState("");
  const [arrowClicked, setArrowClicked] = useState(false);
  const router = useRouter();
  

  {/*const handleScroll = (section: string) => {
  setActiveItem(section);

  document.getElementById(section)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  }); */}


  return (
    <div className="min-h-screen bg-[#F4F3E6] relative">

      <div className="flex justify-between items-center">
      <div className="text-[#F699CD] ml-2">
      <h1 className={`${dancingScript.className} text-2xl`}> Temiloluwa Melisa Akinrujomu</h1>
      <h3 className={`${changaOne.className} text-2xl`}>Software Engineer</h3>
      </div>
      
    


{/* <div className="relative w-100 h-15 mr-10"> 
  
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="flex gap-5 text-xs">
    <button
     
     className={`flex items-center ${clickedButton === "project" ? "scale-125 text-white"}`}>
      <span className={`material-symbols-outlined text-[#F8F5F2] ${rotatedButton === "project" ? "rotate-45" : "rotate-0"}`}>bubble</span>View Project</button>
    <button 
     onClick={() => setRotatedButton("cv")}
     onClickCapture={() => setClickedButton("cv")}
     className={`flex items-center transition-transformation duration-300 ${clickedButton === "cv"? "scale-125 text-white" : "scale-100"}`}>
      <span className={`material-symbols-outlined text-[#F8F5F2] ${rotated ? "rotate-45" : "rotate-0"}`}>bubble</span>Download CV</button>
    onClick={() => setRotatedButton("contact")}
     onClickCapture={() => setClickedButton("contact")}
     className={`flex items-center transition-transformation duration-300 ${clickedButton === "contact" ? "scale-125 text-white" : "scale-100"}`}>
      <span className={`material-symbols-outlined text-[#F8F5F2] ${rotated ? "rotate-45" : "rotate-0"}`}>bubble</span>Contact us</button>
  </div>
</div>
</div> */}

<div className="mr-10">
  <div className="flex items-center justify-center">
    <div className="flex gap-5 text-xs">

      <button
        onClick={() => {
          setRotatedButton("project");
          setClickedButton("project");
          router.push("/projects")
        }}
         onMouseLeave={() => {
    setClickedButton("");
  }}
        className={`flex items-center transition-transform duration-300 cursor-pointer ${
          clickedButton === "project"
            ? "scale-125 text-[#CB1D85]"
            : "scale-100"
        }`}
      >
        <span
          className={`material-symbols-outlined transition-transform duration-300 ${
            rotatedButton === "project" ? "rotate-45" : "rotate-0"
          }`}
        >
          bubble
        </span>
        View Project
      </button>


      {/* <button 
        onClick={() => {
          setRotatedButton("cv");
          setClickedButton("cv");
        }}
        className={`flex items-center transition-transform duration-300 cursor-pointer ${
          clickedButton === "cv"
            ? "scale-125 text-white"
            : "scale-100"
        }`}
      >
        <span
          className={`material-symbols-outlined transition-transform duration-300 ${
            rotatedButton === "cv" ? "rotate-45" : "rotate-0"
          }`}
        >
          bubble
        </span>
        Download CV
      </button>*/}

      <DownloadCV
  rotatedButton={rotatedButton}
  clickedButton={clickedButton}
  setRotatedButton={setRotatedButton}
  setClickedButton={setClickedButton}
/>


      <button
        onClick={() => {
          setRotatedButton("contact");
          setClickedButton("contact");
          router.push("/contactme")
        }}
         onMouseLeave={() => {
    setClickedButton("");
  }}
        className={`flex items-center transition-transform duration-300 cursor-pointer ${
          clickedButton === "contact"
            ? "scale-125 text-[#CB1D85]"
            : "scale-100"
        }`}
      >
        <span
          className={`material-symbols-outlined transition-transform duration-300 ${
            rotatedButton === "contact" ? "rotate-45" : "rotate-0"
          }`}
        >
          bubble
        </span>
        Contact 
      </button>

    </div>
  </div>
</div>

</div>


<div className={`text-4xl text-[#F699CD] ml-12 mt-18 border-0 border-[#494848] rounded-xl p-12 w-[750px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] font-['Geist_Pixel']`}>
<h1>As a Frontend Engineer,
   <br/> I believe every interface tells a story, 
   <br/>so i build digital experiences that make those stories meaningful, intuitive, and memorable.
</h1>
</div>

<Sidebar/>

{/* <div className=" absolute right-20 bottom-0 top-0"> 
  <img
  src="/temmy2.png"
  alt="Temiloluwa"
  width={350}
  height={500}
/>
</div>  */}


<div className="absolute right-10 bottom-6 text-white">
        <button 
  onClick={() => {
    setArrowClicked(!arrowClicked)
    router.push("/aboutme")
  }}
  className={`flex items-center justify-center rounded-full border bg-[#CB1D85] w-12 h-12 ${arrowClicked ?"scale-125" : "scale-100" }`}>
<span className="material-symbols-outlined leading-none">
arrow_forward
</span>
  </button>
</div>


</div>


  );
}

export default Home