import React from 'react'

export default function ListBlog(props) {
    const blogs = props.blogs;
    const handleDelete = props.handleDelete;

    // console.log(props, blogs );

    return (
        <div className="blogs">
           { blogs.map((blog) =>(
               <div className='blog' key={blog.id}>
                <h1>{blog.title}</h1>
                <p>{blog.body}</p>
                <button onClick={()=>handleDelete(blog.id)} className='btn'>delete</button>
                <small>{blog.author}</small>
               </div>
           ))}

        
        </div>
    )
}
