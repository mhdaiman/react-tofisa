// import { useState  } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home';
import CreatBlog from './pages/bolg/CreateBlog';
import './App.css';
import ShowBlog from "./pages/bolg/ShowBlog";

export default function App() {
  // function handleDelete(id){
  //   const newBlogs = blogs.filter( (blog) => blog.id !== id)
  //   data(newBlogs);
  // }
  return (

    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/blog/create" element={<CreatBlog />} />
          <Route path="/blog/:id" element={<ShowBlog />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}