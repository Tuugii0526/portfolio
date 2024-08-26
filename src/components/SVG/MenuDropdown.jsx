import { SpecialButtonForHeader } from "../SpecialButtonForHeader"
import { useState } from "react"
import React from "react"
import { ThemeSum } from "./ThemeSun"
import { ThemeNight } from "./ThemeNight"
const MenuOptions=[
    'About','Work','Testimonials','Contact','|'
]
const MenuOptionsForMobile=MenuOptions.filter(menu=>menu!=='|')

export const MenuDropdown=({makeMenuAppear,hiddenForMobileOfMenu,isForMobile,isInDark,setIsInDark})=>{
    const [sunOrMoon,setSunOrMoon]=useState(true)
    const handleTheme=()=>{
    setSunOrMoon(!sunOrMoon)
    document.documentElement.classList.toggle('dark')
    setIsInDark(!isInDark)
      }
      if(isForMobile)
      {
        return <>
        <div className="w-full h-[176px] flex flex-col p-4 gap-4 border-b-[1px] border-gray-100 dark:border-#1F2937">
        { 
        MenuOptionsForMobile.map((menu,index)=>{
            return <span className={`${hiddenForMobileOfMenu} min-[990px]:block text-gray-600 dark:text-[#D1D5DB]` } key={index} ><a href={`#${menu}`} onClick={makeMenuAppear}>{menu}</a></span>
        })
        
        }
        </div>
        <div className="w-full h-[120px] p-4 flex flex-col gap-4  ">
        <div className="flex items-center justify-between">
            <span>Switch theme</span>
            {  sunOrMoon ?
            <ThemeSum handleTheme={handleTheme} hiddenOfTheme={hiddenForMobileOfMenu}/>
        :
           <ThemeNight handleTheme={handleTheme} hiddenOfTheme={hiddenForMobileOfMenu}/>}
        </div>
        <SpecialButtonForHeader content={"Download CV"} hidden="" width="w-full"/>
        </div>
        </>
      }
      else
      {
        return <div className={`flex  items-center gap-6`}>
        <span className="material-symbols-outlined min-[990px]:hidden " onClick={makeMenuAppear}>
    menu
    </span>
    { 
        MenuOptions.map((menu,index)=>{
            return <span className={`${hiddenForMobileOfMenu} min-[990px]:block text-gray-600 dark:text-[#D1D5DB]` } key={index} ><a href={`#${menu}`}>{menu}</a></span>
        })
        
    }
    
     {  sunOrMoon ?
            <ThemeSum handleTheme={handleTheme} hiddenOfTheme={hiddenForMobileOfMenu}/>
        :
           <ThemeNight handleTheme={handleTheme} hiddenOfTheme={hiddenForMobileOfMenu}/>}
        
    <SpecialButtonForHeader content={"Download CV"}/>
     
    </div>
      }
   
    
    
}