import Navbar from '../ui/dashboard/navbar/navbar';
import Sidebar from '../ui/dashboard/sidebar/sidebar';
const DashboardLayout = ({children}) => {
    return(
        <div className="flex relative  h-full max-sm:w-[100%]">
            <div className="max-sm:hidden basis-1/4 bg-[#182237] p-5 ">
                <Sidebar/>
            </div>
            <div className="max-sm:flex-1 basis-3/4 p-6 flex flex-col gap-4">
                <Navbar/>
                {children}
            </div>
        </div>
    )
}
export default DashboardLayout;