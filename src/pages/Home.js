import React from 'react'
import { useState  } from "react";
import ListBlog from '../components/ListBlog'
import loading from '../images/loading.gif';
import useFetch from "../hooks/useFetsh";
import '../styles/blog.css';


export default function Home() {
    const [ author, setAuthor ] = useState('mario');
    const { data: blogs , error , isPending } = useFetch('http://localhost:8000/blogs')
    
    return (
        <div>
            <div className='pending'>
                {isPending && <img src={loading} />}
                {error && <div>{error}</div>}
            </div>
            {blogs && <ListBlog blogs={blogs}></ListBlog>}
            <div className='create'>
            <label> fillter Blog by author:</label>
            <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            >
                <option value="mario">mario</option>
                <option value="mostafa">mostafa</option>
                <option value="yoshi">yoshi</option>
            </select>
            </div>
                {blogs && <ListBlog blogs={blogs.filter((blog) => blog.author === author)}></ListBlog>}
        </div>
    )
}
