import { MenuDropdown } from "./SVG/MenuDropdown"

export const Header=({makeMenuAppear,position,hiddenForMobileOfHeader="",isForMObile,isInDark,setIsInDark})=>{
    if(isForMObile)
    {
        return <div className={`w-full h-full top-0  ${position} text-[#111827]  flex flex-col  items-center bg-white dark:bg-[#030712] dark:*:text-white `}  >
        <div className="w-full height-[68px] p-4 flex justify-between  items-center border-b-[1px] border-gray-100 dark:border-#1F2937">
        <span className="font-normal text-[30px] leading-9 ml-2  ">Iam_Tuugii</span>
        <span class="material-symbols-outlined" onClick={makeMenuAppear}>
close
</span>
        </div>
        <MenuDropdown makeMenuAppear={makeMenuAppear} hiddenForMobileOfMenu={hiddenForMobileOfHeader} isForMobile={isForMObile} isInDark={isInDark} setIsInDark={setIsInDark}/>
            </div>
    }
    else
    {
        return <div className={`w-full h-[68px]  top-0 px-4  ${position} text-[#111827]  flex  justify-between items-center bg-white dark:bg-[#030712] dark:*:text-white md:px-20`}  >
        <span className="font-normal text-[30px] leading-9 ml-2  ">Iam_Tuugii</span>
        <MenuDropdown makeMenuAppear={makeMenuAppear} hiddenForMobileOfMenu={hiddenForMobileOfHeader} isForMobile={isForMObile} isInDark={isInDark} setIsInDark={setIsInDark}/>
            </div>
    }
    
}
