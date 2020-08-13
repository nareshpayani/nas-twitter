import React, { useState } from "react";
import "../Css/Tweetbox.css"
import { Button, Avatar,  } from '@material-ui/core'
import database from "../firebase";

function Tweetbox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();
    
        database.collection("posts").add({
          displayName: "Naresh Payani",
          username: "nareshpayani",
          verified: true,
          text: tweetMessage,
          image: tweetImage,
          avatar:""
        });
    
        setTweetMessage("");
        setTweetImage("");
      };



    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox__input">
                    <Avatar src=""></Avatar>
                    <input  onChange={(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage}
                    type="text" placeholder="What's happening?" />
                </div>

                <input className="tweetbox__imageinput" 
                value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
                type="text" placeholder="Enter Image URL"/>

                <Button 
                onClick={sendTweet}
                className="tweetbox__tweetbutton">Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox
