import Search from '../search/search'
import Image from 'next/image'
const CreateTableBody = ({name,email,created,role,action}) =>{
    return(
        <tr className="relative  max-sm:pr-2 h-auto max-sm:text-[.4rem] md:text-[.6rem] lg:text-[.8rem] xl:text-[.9rem]  flex items-center max-sm:w-[100%] w-[90%]">
            <td className="max-sm:basis-2/5 md:basis-2/5">
                <div className="flex items-center  max-sm:gap-1 md:gap-2">
                    <Image src="/noavatar.png" width={35} height={35} className="rounded-full max-sm:w-5"/>
                    <p>{name}</p>
                </div>
            </td>
            <td className="max-sm:hidden lg:pr-20 xl:pr-36 md:basis-3/5">
              {email}
            </td>
            <td className="max-sm:basis-2/5  max-sm:pl-2 md:basis-2/5">{created}</td>
            <td className="max-sm:basis-2/5 max-sm:pl-4 md:basis-1/5">{role}</td>
            <td className="max-sm:basis-2/5 max-sm:pl-4 md:basis-1/5">{action}</td>
            <td className="max-sm:basis-2/5   md:basis-1/5 ">
                <div className="flex max-sm:text-[.5rem] max-sm:gap-1 md:gap-2 lg:gap-3 absolute text-[.8rem] -mt-3 ">
                    <button className="bg-[#008B8B] max-sm:px-1 max-sm:py-1 md:px-1 md:py-1 lg:px-2 lg:py-1 rounded-md">View</button>
                    <button className="bg-red-500  max-sm:px-1 max-sm:py-1 md:px-1 md:py-1 lg:px-2 lg:py-1 rounded-md">Delete</button>
                </div>
            </td>

            
        </tr>
    )
}
const Users = () =>{
    return(
        <div className="flex flex-col gap-4 w-full px-2 h-auto max-sm:py-2 md:px-4 md:py-2">
            <div className="flex justify-between">
                 <Search placeholder="Search for a user"/>
                 <button className="bg-[#5d57c9]  max-sm:text-[.4rem] md:p-2 rounded-lg text-sm px-3">Add New</button>
            </div>
            
            <table className="flex flex-col gap-2 w-full relative">
                <thead className="px-1">
                    <tr className="flex font-black max-sm:text-[#5d57c9] max-sm:gap-8 max-sm:w-[100%] w-[90%] text-[#b7bac1] max-sm:text-[.3rem] max-sm:pr-2 md:text-[.7rem] lg:text-[1rem]">
                        <td className="max-sm:basis-2/5 md:basis-2/5 ">Name</td>
                        <td className="max-sm:basis-2/5 max-sm:hidden max-sm:pr-4 lg:pr-20 xl:pr-36 md:basis-3/5">Email</td>
                        <td className="max-sm:basis-2/5 md:basis-2/5">Created at</td>
                        <td className="max-sm:basis-2/5 md:basis-1/5">Role</td>
                        <td className="max-sm:basis-2/5 md:basis-1/5">Action</td>
                        <td className="max-sm:basis-2/5 md:basis-1/5"></td>
                    </tr>
                </thead>

                <tbody className="flex flex-col gap-3">
                    <CreateTableBody name="hello" email="hello@gmail.com" created="Oct 30 2023" role="client" action="passive"/>
                    <CreateTableBody name="jana" email="janadoe@gmail.com" created="Oct 29 2023" role="client" action="active"/>
                </tbody>
            </table>
        </div>
    )
}
export default Users;