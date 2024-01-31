import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await fetch("https://dummyjson.com/posts");
      const postJson = await fetchedPosts.json();
      setPosts(postJson.posts);
      //   console.log(postJson.posts);
    };
    fetchPosts();
  }, []);

  return <div></div>;
};

export default HomePage;
