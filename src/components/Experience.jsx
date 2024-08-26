import { ExperienceUpwork } from "./ExperienceUpwork"
import { SpecialButton } from "./SpecialButton"
const unorderedListOne=['Lorem ipsum dolor sit amet, consectetur adipiscing elit','Ut pretium arcu et massa semper, id fringilla leo semper.','Sed quis justo ac magna.','Lorem ipsum dolor sit amet, consectetur adipiscing elit.']

const unorderedListTwo=['Sed quis justo ac magna.','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Sed quis justo ac magna.','Lorem ipsum dolor sit amet, consectetur adipiscing elit.']

const unorderedListThree=['Lorem ipsum dolor sit amet, consectetur adipiscing elit.']

export const Experience=()=>{
return <div className="w-full rounded-xl flex flex-col items-center gap-6 bg-[#F9FAFB] dark:bg-[#111827]" id="Testimonials">
<SpecialButton content="Experience"/>
<p>Here is a quick summary of my most recent experiences:</p>
<ExperienceUpwork date={"Nov 2021-Present"} role={"Sr.Frontend Developer"} lists={unorderedListOne}/>
<ExperienceUpwork date={"Jul 2017-Oct 2021"} role={"Team Lead"} lists={unorderedListTwo}/>
<ExperienceUpwork date={"Dec 2015-May 2017"} role={"Full Stack Developer"} lists={unorderedListThree}/>
</div>
}