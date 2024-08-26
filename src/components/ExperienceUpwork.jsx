import { Upwork } from "./SVG/Upwork"

export const ExperienceUpwork=({date,role,lists})=>{
    return <div  className="w-full max-w-[896px] p-8 flex flex-col gap-4 bg-[#FFFFFF] dark:bg-[#030712] rounded-xl lg:flex-row lg:gap-12 lg:*:grow ">
     <Upwork/>
     <p className="lg:order-3 ">{date}</p>
    <div className="lg:order-2">
    <p className="text-[#111827] font-semibold text-2xl dark:text-white ">{role}</p>
     <ul>
        {lists.map(list=>{
            return list && <li className="list-disc  list-inside">{list}</li>
        })}
     </ul>
    </div>
    </div>
}