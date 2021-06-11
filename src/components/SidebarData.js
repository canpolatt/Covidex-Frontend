import  React from 'react'
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GoIcons from "react-icons/go";

export const SidebarData=[
    {
        title:'Home',
        path:'/dashboard',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Register',
        path:'/dashboard/patientregister',
        icon:<IoIcons.IoIosPaper/>,
        cName:'nav-text'
    },
    {
        title:'Search',
        path:'/dashboard/patientregister',
        icon:<GoIcons.GoSearch/>,
        cName:'nav-text'
    },
]
