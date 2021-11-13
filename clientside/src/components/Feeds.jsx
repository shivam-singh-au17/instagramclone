import React, { useState, useEffect } from "react";
import Post from "./Post";
import axios from "axios";

export default function Feeds() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      // fetching post that mahima is following
      const res = await axios.get("http://localhost:8800/api/posts/timeline/618ec41fcb60486757fe31d9");
      setPosts(res.data);
      console.log(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </>
  );
}
