import { SpecialButton } from "./SpecialButton"
import { SpecialButtonForWork } from "./SpecialButtonForWork"
import { Figma } from "./SVG/Figma"
import { GitHub } from "./SVG/GitHub"
import { Twitter } from "./SVG/Twitter"

export const Contact=()=>{
    return <div className="w-full  flex flex-col *:flex *:flex-col *:items-center *:gap-4  items-center gap-12" id="Contact">
        <div>
        <SpecialButtonForWork content={"Get in touch"}/>
        <p className="max-w-[576px] text-center">What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
        </div>


      <div>
        <div className="flex gap-2 items-center max-w-[576px] sm:gap-3 md:gap-5">
        <span class="material-symbols-outlined" >
mail
</span>
<span className="font-semibold text-sm sm:text-2xl xl:text-4xl  dark:text-[#F9FAFB]">namjildorjtuguldur1234@gmail.com</span>
<span class="material-symbols-outlined">
content_copy
</span>
        </div>
        <div className="flex gap-2 items-center max-w-[576px] sm:gap-3 md:gap-5">
        <span class="material-symbols-outlined">
call
</span>
<span className="font-semibold text-sm sm:text-2xl xl:text-4xl dark:text-[#F9FAFB]">+976 90914944</span>
<span class="material-symbols-outlined">
content_copy
</span>
        </div>
      </div>


<div>
    <p className="text-center ">You may also find me on these platforms!</p>
    <div className="flex justify-center gap-4  ">
    <GitHub/>
<Twitter/>
<Figma/>
    </div>
</div>
    </div>
}