import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";
import Image from 'next/image'
const Rightbar = () => {
    return(
        <div className="flex flex-col max-sm:gap-6 md:gap-6  h-full relative">
            <div className="flex lg:fixed flex-col gap-4 p-4 bg-[#182237] md:h-[25%] md:h-auto lg:h-auto xl:py-6   rounded-lg">
                {/* <div className="flex border-red-400 border-solid border">    
                  <Image src="/astronaut.png" width={100} height={100} className="object-cover" />
                </div> */}
                <span>🔥 Available Now</span>
                <h3 className="text-[.8rem] font-bold">
                   How to use the new version of the admin dashboard?
                </h3>
                <span className="text-[.5rem] text-[#b7bac1]">Takes 4 minutes to learn</span>
                <p className="text-[.7rem] text-[#b7bac1] ">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Reprehenderit eius libero perspiciatis recusandae possimus.
                </p>
                <button className="text-[.6rem] bg-[#5d57c9] flex justify-center items-center gap-1 w-[30%] py-2 px-1 rounded-md">
                    <MdPlayCircleFilled size="12"/>
                    Watch
                </button>
            </div>

            <div className=" lg:mt-[300px] xl:mt-[300px] flex lg:fixed flex-col gap-4 p-4 bg-[#182237] h-auto lg:h-auto rounded-lg">
               <span>🚀 Coming Soon</span>
               <h3 className="text-md font-bold font-extrabold">
                 New server actions are available, partial pre-rendering is coming up!
               </h3>
               <span className="text-[.6rem] text-[#b7bac1]">Boost your productivity</span>
                <p className="text-[.7rem] text-[#b7bac1]">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Reprehenderit eius libero perspiciatis recusandae possimus.
                </p>
                <button className="text-[.6rem] bg-[#5d57c9] flex justify-center items-center gap-1 w-[30%] py-2 px-1 rounded-md">
                    <MdReadMore size="12"/>
                    learn
                </button>
            
            </div>
            
        </div>
    )
}
export default Rightbar