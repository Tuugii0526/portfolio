import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import {useState} from 'react'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [hidden,setHidden]=useState('hidden')
  const [position,setPosition]=useState('sticky')  //position for header
  const [isInDark,setIsInDark]=useState(true)
  const makeMenuAppear=()=>{
   if(position=='sticky')
   {
    setPosition('')
    setHidden('block')
   }
   else
   {
    setPosition('sticky')
    setHidden('hidden')
   }
  }
  return (<div className="relative ">
   <div className={`fixed ${hidden} min-w-[300px] max-w-[320px] h-[667px] min-[990px]:hidden right-0 bg-white shadow-[0_0_10px_1000px_#111827CC]`}>
   <Header makeMenuAppear={makeMenuAppear} position={position} isForMObile={true} isInDark={isInDark} setIsInDark={setIsInDark}/>
   </div>
   <div className="w-full max-w-[1440px] min-w-[320px] mx-auto  flex flex-col justify-center items-center ">
    <Header makeMenuAppear={makeMenuAppear} position={position} hiddenForMobileOfHeader="hidden" isForMObile={false} isInDark={isInDark} setIsInDark={setIsInDark}/>
    <div className="w-full flex flex-col justify-center items-center *:px-4 *:py-16  md:last:py-6 md:*:px-20 md:*:py-24 dark:*:text-[#D1D5DB]">
    <Hero />
    <AboutMe/>
    <Skills isInDark={isInDark}/>
    <Experience/>
    <Work/>
    <Contact/>
    </div>
    <Footer/>
   </div>
  </div>
  )
}
   