import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';//react-router-dom 6
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetsh';
import loading from '../../images/loading.gif';
import '../../styles/blog.css';



export default function ShowBlog() {
    const { id } = useParams();
    const { data:blog, error, isPending } = useFetch("http://localhost:8000/blogs/" + id)
    const history = useNavigate();

    const handelDeleteBlog = () =>{
        fetch("http://localhost:8000/blogs/" + blog.id , {
            method:'DELETE',
        }).then(()=>{
            history('/')
        })
    }

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
                    <button onClick={handelDeleteBlog} className='btn btn-danger'>delete</button>
                    <Link to={`/blogs/edit/${blog.id}`} className='btn btn-warning'>edit</Link>
                    <small>{blog.author}</small>
                </article>
                )
            }
        </div>
    )
}
