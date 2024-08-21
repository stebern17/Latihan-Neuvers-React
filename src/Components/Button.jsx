import Arrow from './../assets/arrow.svg'
export default function Button(){
    return(
        <>
        <button className="bg-[#059669] py-2 px-4 rounded-lg text-white flex items-center gap-3">Learn More <img src={Arrow} alt="" /></button>
        </>
    )

}