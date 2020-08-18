import React from 'react'
import "../Css/Widgets.css"
import SearchIcon from '@material-ui/icons/Search';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
    TwitterFollowButton
  } from "react-twitter-embed";
 

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" aria-expanded="true" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

            {/* 3rd party API */}

                <TwitterTweetEmbed className="twitterembed" tweetId={"592920948698812416"} />

                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="nareshpayani"
                options={{ height: 400 }}
                />

                <TwitterShareButton
                url={"https://www.facebook.com/nareshpayani"}
                options={{ text: "#reactjs is awesome", via: "nareshpayani" }}
                
                />

                <TwitterFollowButton
                    screenName={'nareshpayani'}
                />

                
            </div>
    </div>
    )
}

export default Widgets
