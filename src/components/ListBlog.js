import React from 'react'
import { Link } from 'react-router-dom';
import ReadMoreReact from 'read-more-react';



export default function ListBlog(props) {
    const blogs = props.blogs;
    return (
        <div className="blogs">
            {blogs.map((blog) => (
                <div className='blog' key={blog.id}>
                    <Link className='blog-link' to={`/blogs/${blog.id}`} >
                        <small>{blog.author}</small>
                        <h3>{blog.title}</h3>
                        <div>
                            <ReadMoreReact
                                text={blog.body}
                                // minimumLength
                                min={50}
                                //idealLength
                                ideal={80}
                                //maxLength
                                max={100}
                            />
                            <p>{blog.body}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}
