import Image from 'next/image'
const CreateTableBodyRow = () => {
    return(
        <tr className="flex items-center justify-between max-sm:text-[.5rem]  md:text-[.6rem]  lg:text-[.6rem] ">
            <td className="md:basis-2/6 lg:basis-2/5">
                <div className="flex max-sm:gap-1 md:gap-2 lg:gap-1 xl:gap-2 items-center">
                    <Image src="/noavatar.png" width={20} height={20} className="rounded-full md:w-5 md:h-5" alt="transaction-photo"/>
                    <p className="font-thin">John Doe</p>
                </div>
            </td>
            <td className="md:basis-1/6  lg:basis-2/6">
                <span className="bg-orange-400 p-1 rounded-md opacity-40">pending</span>
            </td>
            <td className="md:basis-1/6 lg:basis-2/6 ">14.02.2023</td>
            <td className="md:basis-1/6  lg:basis-1/6 pr-5">$3.200</td>
        </tr>
        
    )
}
const Transactions = () => {
    return(
        <div className="flex flex-col gap-6 bg-[#182237] px-5  pb-6 rounded-lg py-4">
            <h2 className="text-[#b7bac1]">Latest Transactions</h2>
            <table className="ml-3 flex flex-col gap-5 lg:pr-8">
                <thead className="text-[.8rem] max-sm:text-[.9rem] ">
                    <tr className="flex  justify-between w-full max-sm:ml-3">
                        <td className="md:basis-2/6 lg:basis-2/5">Name</td>
                        <td className="md:basis-1/6 lg:basis-2/6">Status</td>
                        <td className="md:basis-1/6 lg:basis-2/6">Date</td>
                        <td className="pr-4 md:basis-1/6 lg:basis-1/6">Amount</td>
                    </tr>
                </thead>

                <tbody className="flex flex-col gap-8">
                    <CreateTableBodyRow/>
                    <CreateTableBodyRow/>
                    <CreateTableBodyRow/>
                    <CreateTableBodyRow/>
                    <CreateTableBodyRow/>
                </tbody>
            </table>
        </div>
    )
}
export default Transactions;