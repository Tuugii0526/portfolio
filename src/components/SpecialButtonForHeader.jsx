export const SpecialButtonForHeader=({content,hidden='hidden',width="w-fit"})=>
    {
        return <button className={`${hidden} min-[990px]:block ${width} h-7 rounded-xl px-5 py-1 bg-[#E5E7EB] dark:bg-[#374151] text-[14px]`} >{content}</button>
    }