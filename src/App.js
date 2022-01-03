import { useState , useEffect } from "react";
import ListBlog from "./components/ListBlog";
import './styles/blog.css';
import './App.css';
export default function App() {
  const [ blogs, setBlogs ] = useState();

  const [ name, setName ] = useState('mario');

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
    .then( res => {
      return res.json()
    }).then( data => {
      console.log(data)
      setBlogs(data)
    })
    // console.log(name);
  },[]);

  function handleDelete(id){
    const newBlogs = blogs.filter( (blog) => blog.id !== id)
    setBlogs(newBlogs);
  }

  return (
    
    <div className="container">
      {blogs && <ListBlog blogs={blogs} handleDelete={handleDelete}></ListBlog>}
      <div><h1>filter data for blog author "mostafa"</h1></div>
      {blogs && <ListBlog blogs={blogs.filter((blog)=> blog.author ==="mostafa")} handleDelete={handleDelete}></ListBlog>}
      <div><h1>update name {name}</h1></div>
      <div><button className="btn" onClick={()=>setName('loai')}>updates name</button></div>
    </div>
  );
}