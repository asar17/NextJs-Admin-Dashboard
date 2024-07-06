"use client"
import {
    MdNotifications,
    MdOutlineChat,
    MdPublic,
  } from "react-icons/md";
import { usePathname } from "next/navigation";
import Search from "../search/search";
const Navbar = () => {
    const pathname= usePathname();
    const newPath= pathname.replace("/"," ")
    return(
        <div className="flex relative bg-[#182237] h-20 justify-between py-8 px-4 gap-4 items-center rounded-xl w-[100%] ">
            <p className="flex basis-3/4 capitalize text-[#b7bac1] max-sm:text-[.5rem]">{newPath}</p>
            <Search placeholder="Search..."/>
            <div className="flex gap-3 h-10 items-center ">
                <MdOutlineChat/>
                <MdNotifications/>
                <MdPublic/>
            </div>
        </div>
    )
}
export default Navbar