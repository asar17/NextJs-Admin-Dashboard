"use client"
import { menuItems } from "@/app/utils"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";
const Sidebar = () => {
    const pathname= usePathname();
    console.log('pathname',pathname)
    return(
        <div className="flex flex-col gap-6">
            <div className="flex gap-4">
                <Image src="/noavatar.png" alt="no-avatar" width={50} height={50} className="rounded-full"/>
                <div className="flex flex-col">
                    <h6>users1</h6>
                    <p className="text-[.7rem] text-[#b7bac1]">Administrator</p>
                </div>
            </div>

            <div className="flex flex-col">
              <ul className="flex flex-col ">
                    {menuItems.map((item,i)=>(
                      <li className="flex flex-col gap-1" key={item+i}>
                         <p className="text-[#b7bac1] text-sm">{item.title}</p>
                         {item.links.map((link,i)=>(
                             <Link key={link+i} href={link.path} className={`flex items-center w-full h-12  px-6 gap-2 ${pathname === link.path && "bg-[#2e374a]" || pathname === "/dashboard"+link.path && "bg-[#2e374a]"} hover:bg-[#2e374a] rounded-lg`}>
                                 <p>{link.icon}</p>
                                 <span className="text-sm">{link.name}</span>
                             </Link>
                         ))}
                      </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Sidebar