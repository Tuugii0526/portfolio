export const Icon=({icon,script})=>{
    return <div className="w-[78px] h-24 flex flex-col items-center ">
        {icon}
        <p>{script}</p>
    </div>
}