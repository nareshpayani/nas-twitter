import React from 'react'
import "../Css/SidebarOptions.css"

function SidebarOptions({active ,Icon, text}) {
    return (
        <div className={`sidebarOption ${active && "sidebarOption__active"}`}>
            <Icon/>
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOptions
