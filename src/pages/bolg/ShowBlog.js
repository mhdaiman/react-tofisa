import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetsh';
import loading from '../../images/loading.gif';
import '../../styles/blog.css';



export default function ShowBlog() {
    const { id } = useParams();
    const { data:blog, error, isPending } = useFetch("http://localhost:8000/blogs/" + id)
    return (
        <div>
            <div className='pending'>
                {isPending && <img src={loading} />}
                {error && <div>{error}</div>}
            </div>
            {blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <p>{blog.body}</p>
                    <button className='btn' >delete</button>
                    <small>{blog.author}</small>
                </article>
                )
            }
        </div>
    )
}
