import axios from "axios";
import React, { useState , useEffect } from "react";
import ListBlog from "./components/ListBlog";
import './styles/blog.css';
import './App.css';

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [post, setPost] = useState(null);
  const [ blogs, setBlogs ] = useState([
    {title:"My new website 1", body:'lorem ipsum....', author:'mario', id:1},
    {title:"My new website 2", body:'lorem ipsum....', author:'mhd aiman', id:2},
    {title:"My new website 3", body:'lorem ipsum....', author:'mostafa', id:3},
    {title:"My new website 4", body:'lorem ipsum....', author:'mostafa', id:4},
    {title:"My new website 5", body:'lorem ipsum....', author:'mostafa', id:5},
    {title:"My new website 6", body:'lorem ipsum....', author:'mostafa', id:6},
  ]);

  function handleDelete(id){
    const newBlogs = blogs.filter( (blog) => blog.id !== id)
    setBlogs(newBlogs);
  }

  useEffect(() => {
    // axios.get(`${baseURL}/1`).then((response) => {
    //   setPost(response.data);
    // });
    console.log(blogs)
  }, []);

  // function deletePost() {
  //   axios
  //     .delete(`${baseURL}/1`)
  //     .then(() => {
  //       alert("Post deleted!");
  //       setPost(null)
  //     });
  // }

  // if (!post) return "No post!"

  return (
    
    <div className="container">
      <ListBlog blogs={blogs} handleDelete={handleDelete}></ListBlog>
      <div><h1>filter data for blog author "mostafa"</h1></div>
      <ListBlog blogs={blogs.filter((blog)=> blog.author ==="mostafa")} handleDelete={handleDelete}></ListBlog>
      {/* <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={deletePost}>Delete Post</button> */}
    </div>
  );
}