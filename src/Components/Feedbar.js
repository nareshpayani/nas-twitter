import React, { useState, useEffect } from "react";
import "../Css/Feedbar.css"
import Tweetbox from './Tweetbox'
import Post from './Post'
import database from "../firebase";
import FlipMove from "react-flip-move";

function Feedbar() {

    const [posts, setPosts] = useState([]);

  useEffect(() => {
    database.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

    return (
        <div className="feedbar">
            <div className="feedbar__header">
                <h2>Home</h2>
            </div>


                <Tweetbox/>
         
            <FlipMove>
                {posts.map((post) => (
                <Post
                    key={post.text}
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feedbar
