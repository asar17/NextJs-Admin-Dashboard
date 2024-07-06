import Card from '../ui/dashboard/card/card';
import Transactions from '../ui/dashboard/transactions/transactions';
import Charts from '../ui/dashboard/charts/charts';
import Rightbar from '../ui/dashboard/rightbar/rightbar'


const DashboardPage = () =>{
    return(
        <div className="max-sm:flex-col max-sm:gap-6 md:flex-col flex lg:flex-row  h-full gap-4 max-sm:w-full max-sm:flex-1 md:flex-1">
            <div className="max-sm:w-[100%] md:w-[100%] lg:w-[70%] flex flex-col gap-4">
                <Card/>
                <Transactions/>
                <Charts/>
            </div>
            <div className="md:w-[100%] lg:w-[30%]">
                <Rightbar/>
            </div>
        </div>
    )
}
export default DashboardPage ;