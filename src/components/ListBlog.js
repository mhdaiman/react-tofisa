import React from 'react'
import { Link } from 'react-router-dom';
import ReadMoreReact from 'read-more-react';



export default function ListBlog(props) {
    const blogs = props.blogs;
    // const [readMore,setReadMore]=useState(false);
    // const handleDelete = props.handleDelete;

    // console.log(props, blogs );

    return (
        <div className="blogs">
            {blogs.map((blog) => (
                <div className='blog' key={blog.id}>
                    <Link className='blog-link' to={`/blog/${blog.id}`} >
                        <h1>{blog.title}</h1>
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
                        </div>
                        
                        <small>{blog.author}</small>
                    </Link>
                </div>
            ))}


        </div>
    )
}
