import { Figma } from "./SVG/Figma"
import { GitHub } from "./SVG/GitHub"
import { Location } from "./SVG/Location"
import { Twitter } from "./SVG/Twitter"

export const Hero=()=>{
    return <div className="w-full  flex flex-col items-center justify-around bg-[#FFFFFF] dark:bg-[#030712] md:flex-row  md:justify-between   md:py-12">
   <img src="images/hello.jfif" alt="" className=" h-[150px] w-[200px] min-w-[200px] mb-12 border-8 border-white dark:border-[#030712] md:mb-0 shadow-[0_20px_0_4px_#374151]  md:shadow-[30px_30px_0_8px_#374151]   md:order-2 md:w-[30%] md:h-1/2 md:min-w-[240px]  "/>
   <div className="w-[90%] md:w-[45%] flex flex-col gap-4 self-start">
    <div>
    <p className="font-semibold text-4xl dark:text-white">Hi, I'am Tuugii 👋</p>
    <p className="">
    I specialize in full stack development, particularly with React.js and Node.js.
    My main goal is to create exceptional digital experiences that are fast, visually appealing, and accessible to everyone. With over 7 years of experience in web development, I continue to find joy in crafting innovative solutions and designs.
    </p>
    </div>
    <div>
        <p><Location/> Ulaanbaatar,Mongolia</p>
        <ul className="list-disc marker:text-green-900 marker:text-[20px] list-inside  pl-2">
            <li>Availabel for new projects</li>
        </ul>
    </div>
    <div className="*:inline-block ">
<GitHub/>
<Twitter/>
<Figma/>
    </div>
   </div>
    </div>
}
