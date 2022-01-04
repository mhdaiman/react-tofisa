// import { useState  } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home';
import CreatBlog from './pages/bolg/CreateBlog';
import ShowBlog from "./pages/bolg/ShowBlog";
import EditBlog from "./pages/bolg/EditBlog";
import NotFound from "./pages/NotFound";
import './App.css';


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
          <Route path="/blogs/create" element={<CreatBlog />} />
          <Route path="/blogs/edit/:id" element={<EditBlog />} />
          <Route path="/blogs/:id" element={<ShowBlog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}