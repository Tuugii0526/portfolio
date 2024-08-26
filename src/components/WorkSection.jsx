import { SpecialButtonForWork } from "./SpecialButtonForWork"
import { Share } from "./SVG/Share"

export const WorkSection=({workName,workAbout,languagesUsed,index})=>{
    
    return <div className="w-full flex flex-col md:flex-row rounded-xl overflow-hidden">
        <div className={`w-full p-8 md:p-0 md:w-1/2 flex justify-center items-center bg-gray-50 dark:bg-[#374151] ${index%2==0 ? 'md:order-1':'md:order-2'}`} >
        <img src="../../images/hello.jfif" alt="" className="min-w-[200px] h-[180px] rounded-xl md:h-3/5 md:w-2/5  "  />
        </div>
        <div className={`w-full md:w-1/2 flex  flex-col p-8 lg:p-12 gap-6 dark:bg-[#1F2937] ${index%2==0 ? 'md:order-2':'md:order-1'}`}>
        <p className=" text-xl font-semibold dark:text-white">{workName}</p>
        <p className="">{workAbout}</p>
        <div className="flex flex-wrap gap-2">
         {
            languagesUsed.map((language,index)=>{
                return <SpecialButtonForWork content={language} />
            })
         }
        </div>
        <Share/>
        </div>
    </div>
}