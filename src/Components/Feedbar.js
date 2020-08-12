import React from 'react'
import "../Css/Feedbar.css"
import Tweetbox from './Tweetbox'

function Feedbar() {
    return (
        <div className="feedbar">
            <div className="feedbar__header">
                <h2>Home</h2>
            </div>

            {/* Tweets */}
            <div className="feedbar__Tweet">
                <Tweetbox/>
            </div>
           
        </div>
    )
}

export default Feedbar
