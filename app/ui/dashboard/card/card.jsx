import { MdSupervisedUserCircle } from "react-icons/md";
const CreateCard = () => {
    return(
        <div className="flex gap-2 bg-[#182237] w-[100%] h-38 p-4  text-[#b7bac1] rounded-lg first:bg-[#2e374a] hover:bg-[#2e374a] hover:cursor-pointer">
            <MdSupervisedUserCircle/>
            <div className="flex flex-col gap-2 ">
                <p className="text-[.8rem]">Total Users</p>
                <p className="text-white">10.928</p>
                <p className="text-[.6rem]"><span className="text-green-500">12%</span> more than previos week</p>
            </div>
        </div>

    )
}
const Card = () => {
    return(
        <div className="flex flex-col lg:flex-row gap-3">
            <CreateCard/>
            <CreateCard/>
            <CreateCard/>
        </div>
    )
}
export default Card;