import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
  } from "react-icons/md";
export const menuItems = [
    {
        title:'Pages',
        links:[
            {
                name:'Dashboard',
                path:'/dashboard',
                icon:<MdDashboard/>
            },
            {
                name:'Users',
                path:'/users',
                icon:<MdSupervisedUserCircle/>
            },
            {
                name:'Products',
                path:'/products',
                icon:<MdShoppingBag/>
            },
            {
                name:'Transactions',
                path:'/transactions',
                icon:<MdAttachMoney/>
            },
            
        ]
    },

    {
        title:'Analytics',
        links:[
            {
                name:'Revenue',
                path:'/revenue',
                icon:<MdWork/>
            },
            {
                name:'Reports',
                path:'/reports',
                icon:<MdAnalytics/>
            },
            {
                name:'Teams',
                path:'/teams',
                icon:<MdPeople/>
            },
           
            
        ]
    },

    {
        title:'User',
        links:[
            {
                name:'Settings',
                path:'/settings',
                icon:<MdOutlineSettings/>
            },
            {
                name:'Help',
                path:'/help',
                icon:<MdHelpCenter/>
            },
            {
                name:'Logout',
                path:'/logout',
                icon:<MdLogout/>
            },
           
            
        ]
    },
]