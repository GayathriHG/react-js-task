import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await fetch("https://dummyjson.com/posts");
      const postJson = await fetchedPosts.json();
      setPosts(postJson.posts);
      // console.log(postJson);
    };
    fetchPosts();
  }, []);
  const blogPost = posts.map((post) => {
    return (
      <div className=" font-Lora px-20 bg-white mx-10 py-4 mb-4 rounded">
        <div className="text-2xl font-semibold ">{post.title}</div>
        <div>{post.body}</div>
        <br></br>
        <div className="flex gap-3 mb-6">
          <div className="bg-gray-400 p-1 rounded">{post.tags[0]}</div>
          <div className="bg-gray-400 p-1 rounded">{post.tags[1]}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="bg-slate-200 pt-32 pb-4 ">
      <div>{blogPost}</div>
    </div>
  );
};

export default HomePage;
