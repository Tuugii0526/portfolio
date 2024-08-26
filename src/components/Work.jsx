import { SpecialButton } from "./SpecialButton"
import { WorkSection } from "./WorkSection"
const workArray=[
    {
        workName:'Ubcab',
        workAbout:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
        languagesUsed:['React','Next.js','Typescript','Nest.js','PostreSQL','TailwindCSS','Figma','Cypress','Storybook','Git']
    },
    {
        workName:'Mentorhub',
        workAbout:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
        languagesUsed:['React','Next.js','Typescript','Nest.js','PostreSQL','TailwindCSS','Figma','Cypress','Storybook','Git']
    },
    {
        workName:'iToim',
        workAbout:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
        languagesUsed:['React','Next.js','Typescript','Nest.js','PostreSQL','TailwindCSS','Figma','Cypress','Storybook','Git']
    },
]
export const Work=()=>{
    return <div className="w-full flex flex-col items-center gap-6 " id="Work">
        <SpecialButton content={"Work"}/>
        <p>Some of the noteworthy projects I have built:</p>
        {workArray.map((work,index)=>{
            return <WorkSection workName={work.workName} workAbout={work.workAbout} languagesUsed={work.languagesUsed} index={index}/>
        })}
    </div>
}