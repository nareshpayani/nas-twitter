import React from 'react'
import "../Css/Sidebar.css"
import SidebarOptions from './SidebarOptions'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from "@material-ui/core"

function Sidebar() {
    return (
        <div className="sidebar">
    
            <TwitterIcon className="tweet__icon"/>
            <SidebarOptions active text="Home" Icon={HomeIcon}/>
            <SidebarOptions text="Explore" Icon={SearchIcon}/>
            <SidebarOptions text="Notifications" Icon={NotificationsNoneIcon}/>
            <SidebarOptions text="Messages" Icon={EmailOutlinedIcon}/>
            <SidebarOptions text="Bookmarks" Icon={BookmarkBorderIcon}/>
            <SidebarOptions text="List" Icon={ListAltIcon}/>
            <SidebarOptions text="Profile" Icon={PermIdentityIcon}/>
            <SidebarOptions text="More" Icon={MoreHorizIcon}/>

            <Button variant="outlined" className="sidebar__tweetbutton" fullWidth>Tweet</Button>
           
        </div>
    )
}

export default Sidebar
