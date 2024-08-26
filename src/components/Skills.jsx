import { Icon } from "./Icon"
import { CypressIcon } from "./LanguagesIcon/CypressIcon"
import { ExpressIcon } from "./LanguagesIcon/ExpressIcon"
import { FigmaIcon } from "./LanguagesIcon/FigmaIcon"
import { GitIcon } from "./LanguagesIcon/GitIcon"
import { JavascriptIcon } from "./LanguagesIcon/JavasciptIcon"
import { MongoDB } from "./LanguagesIcon/MongoDBIcon"
import { NestIcon } from "./LanguagesIcon/NestIcon"
import { NextIcon } from "./LanguagesIcon/NextIcon"
import { Node } from "./LanguagesIcon/Node"
import { ReactIcon } from "./LanguagesIcon/ReactIcon"
import { SassIcon } from "./LanguagesIcon/SassIcon"
import { SocketIcon } from "./LanguagesIcon/SocketIcon"
import { StrorybookIcon } from "./LanguagesIcon/StorybookIcon"
import { TailwindIcon } from "./LanguagesIcon/TailwindIcon"
import { TypescriptIcon } from "./LanguagesIcon/TypescriptIcon"
import { SpecialButton } from "./SpecialButton"
import { CypressIconForLight } from "./LanguagesIcon/CypressIconForLight"
import { ExpressIconForLight } from "./LanguagesIcon/ExpressIconForLight"
import { SocketIconForLight} from "./LanguagesIcon/SocketIconForLight"

const icons=[

{
    icon:<JavascriptIcon/>,
    script:'Javascript'
},
{
    icon:<TypescriptIcon/>,
    script:'Typescript'
},
{
    icon:<ReactIcon/>,
    script:"React"
},
{
    icon:<NextIcon/>,
  script:"Next.js"
},
{
    icon:<Node/>,
    script:"Node.js"
},
{
    icon:<ExpressIconForLight/>,
    script:"Express.js"
},
{
    icon:<NestIcon/>,
    script:"Nest.js"
},
{
    icon:<SocketIconForLight/>,
    script:"Socket.io"
},
{
    icon:<MongoDB/>,
    script:"MongoDB"
},
{
    icon:<SassIcon/>,
    script:"Sass/Scss"
},
{
    icon:<TailwindIcon/>,
    script:"Tailwindcss"
},
{
    icon:<FigmaIcon/>,
    script:"Figma"
},
{
    icon:<CypressIconForLight/>,
    script:"Cypress"
},
{
    icon:<StrorybookIcon/>,
    script:"Storybook"
},
{
    icon:<GitIcon/>,
    script:"Git"
}]
const iconsForDark=[
    {
        icon:<JavascriptIcon/>,
        script:'Javascript'
    },
    {
        icon:<TypescriptIcon/>,
        script:'Typescript'
    },
    {
        icon:<ReactIcon/>,
        script:"React"
    },
    {
        icon:<NextIcon/>,
      script:"Next.js"
    },
    {
        icon:<Node/>,
        script:"Node.js"
    },
    {
        icon:<ExpressIcon/>,
        script:"Express.js"
    },
    {
        icon:<NestIcon/>,
        script:"Nest.js"
    },
    {
        icon:<SocketIcon/>,
        script:"Socket.io"
    },
    {
        icon:<MongoDB/>,
        script:"MongoDB"
    },
    {
        icon:<SassIcon/>,
        script:"Sass/Scss"
    },
    {
        icon:<TailwindIcon/>,
        script:"Tailwindcss"
    },
    {
        icon:<FigmaIcon/>,
        script:"Figma"
    },
    {
        icon:<CypressIcon/>,
        script:"Cypress"
    },
    {
        icon:<StrorybookIcon/>,
        script:"Storybook"
    },
    {
        icon:<GitIcon/>,
        script:"Git"
    }]
export const Skills=({isInDark})=>{
    let iconsForRepresentation;
    if(isInDark)
        { iconsForRepresentation=iconsForDark.map(({icon,script},index)=>{
            return <Icon icon={icon} script={script} key={index}/>
        } )}
        else
            {
                iconsForRepresentation= icons.map(({icon,script},index)=>{
                    return <Icon icon={icon} script={script} key={index}/>
                } )
            }
    console.log(iconsForRepresentation)
    return <div className="w-full flex flex-col items-center gap-6  bg-[#FFFFFF] dark:bg-[#030712]">
        <SpecialButton content="Skills"/>
        <p className="text-center">The skills, tools and technologies I am really good at:</p>
        <div className="w-full  flex flex-wrap  gap-6 px-8 justify-center">
{iconsForRepresentation}
        </div>
    </div>
}