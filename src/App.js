import { useState  } from "react";
import ListBlog from "./components/ListBlog";
import useFetch from "./hooks/useFetsh";
import './styles/blog.css';
import './App.css';
import loading from './images/loading.gif';
// import Loading from './images/loading';

export default function App() {
  
  const [ name, setName ] = useState('arnish');
  const { data: blogs , error , isPending } = useFetch('http://localhost:8000/blogs')

  // function handleDelete(id){
  //   const newBlogs = blogs.filter( (blog) => blog.id !== id)
  //   data(newBlogs);
  // }

  return (
    
    <div className="container">
      { isPending && <img src={loading}/> }
      { error && <div>{ error }</div> }
      {blogs && <ListBlog blogs={blogs}></ListBlog>}
      <div><h1>filter data for blog author "mostafa"</h1></div>
      {blogs && <ListBlog blogs={blogs.filter((blog)=> blog.author ==="mostafa")}></ListBlog>}
      <div><h1>update name {name}</h1></div>
      <div><button className="btn" onClick={()=>setName('loai')}>updates name</button></div>
    </div>
  );
}