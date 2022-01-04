import React from 'react'
import { Link } from 'react-router-dom';

export default function ListBlog(props) {
    const blogs = props.blogs;
    // const handleDelete = props.handleDelete;

    // console.log(props, blogs );

    return (
        <div className="blogs">
            {blogs.map((blog) => (
                <div className='blog' key={blog.id}>
                    <Link className='blog-link' to={`/blog/${blog.id}`} >
                        <h1>{blog.title}</h1>
                        <p>{blog.body}</p>
                        <button className='btn' >delete</button>
                        <small>{blog.author}</small>
                    </Link>
                </div>
            ))}


        </div>
    )
}
