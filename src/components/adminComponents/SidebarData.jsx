import {FaTh,FaHome,}from "react-icons/fa";
import {BsPeopleFill, BsClipboardCheck} from 'react-icons/bs'
import {MdWork, MdLogout} from 'react-icons/md'

export const SidebarData=[
        {
            path:"/admin",
            title:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/",
            title:"Home",
            icon:<FaHome/>
        },
        {
            path:"/admin/employers",
            title:"Employers",
            icon:<BsPeopleFill/>
        },
        {
            path:"/admin/jobseekers",
            title:"JobSeekers",
            icon:<BsPeopleFill/>
        },
        {
            path:"/admin/jobs",
            title:"Jobs",
            icon:<MdWork/>
        },
        {
            path:"/admin/applications",
            title:"Applications",
            icon:<BsClipboardCheck/>
        },
        
        {
            path:"/",
            title:"Logout",
            icon:<MdLogout/>
        },   
    ]








