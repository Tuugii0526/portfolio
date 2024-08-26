import { SpecialButton } from "./SpecialButton"

export const AboutMe=()=>{
    return <div className="w-full rounded-xl flex flex-col items-center bg-[#F9FAFB] dark:bg-[#111827] gap-6 md:gap-12 scrollSmooth" id="About">
        <SpecialButton content="About me"/>
        <div className="w-full flex flex-col gap-12 items-center md:flex-row md:gap-0 md:justify-between">
            <img src="../../images/hello.jfif" alt="" className="w-[200px] h-[150px] shadow-[0_20px_0_4px_#374151] md:shadow-[-30px_30px_0_8px_#374151] border-8 border-white dark:border-[#030712] md:w-[360px] md:h-[280px] md:self-start lg:self-center" />

            <div className="w-full flex flex-col gap-6 md:w-[40%] md:gap-2 lg:gap-6 lg:w-[55%] ">
    <p className="font-semibold text-2xl dark:text-white">Curious about me? Here you have it:</p>
    <p>I'm a designer turned full stack developer, passionate about React.js and Node.js. I excel in blending technical and visual aspects to craft exceptional digital products, prioritizing user experience, precise design, and optimized code.</p>
    <p>Since starting my web development journey in 2015, I've embraced challenges and kept up with the latest tech trends. Now in my early thirties, seven years in, I'm building cutting-edge web apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.</p>
    <p>With a progressive mindset, I enjoy the entire product development process, from ideation to execution. Off duty, you'll find me on Twitter, tracking startup journeys, or unwinding. Follow me for tech insights and public project updates on Twitter or GitHub.</p>
    <p>Finally, some quick bits about me.</p>
<div className="flex  w-full justify-between">
<ul className="list-disc list-inside *:leading-7">
        <li>B.E. in Computer Engineering</li>
        <li>Avid learner</li>
    </ul>
    <ul className="list-disc list-inside *:leading-7">
    <li>Full time freelancer</li>
    </ul>
</div>
    <p>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
            </div>
        </div>
    </div>
}