import React from 'react'
import "../Css/Tweetbox.css"
import { Button, Avatar,  } from '@material-ui/core'

function Tweetbox() {
    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox__input">
                    <Avatar src=""></Avatar>
                    <input type="text" placeholder="What's happening?"/>
                </div>
                <Button className="tweetbox__tweetbutton">Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox
