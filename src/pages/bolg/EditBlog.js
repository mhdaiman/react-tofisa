import React from 'react'
import { useState } from 'react/cjs/react.development'
import { useParams } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';//react-router-dom 5
import { useNavigate } from 'react-router-dom';//react-router-dom 6
import useFetch from '../../hooks/useFetsh';
import loading from '../../images/loading.gif';


export default function EditBlog() {
    const { id } = useParams();
    const { data:blog, error, isPending } = useFetch("http://localhost:8000/blogs/" + id )
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending1, setIsPending1] = useState(false);
    const history = useNavigate();

    //create new blog
    function editBlog(e) {
        e.preventDefault();
        const editBlog = { title, body, author }
        setIsPending1(true);
        setTimeout(() => {
            fetch('http://localhost:8000/blogs/' + blog.id, {
                method: 'PUT',
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(editBlog)
            }).then(() => {
                setIsPending1(false);
                console.log("edited blog")
                history('/')
            })
        }, 1000)
        setTitle('');
        setBody('');
        setAuthor('mario');
    }

    return (
        <div className="create">
            <div className='pending'>
                {isPending && <img src={loading} />}
            </div>
            <h2>Add a New Blog</h2>
            <form onSubmit={editBlog}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    <option value="mostafa">mostafa</option>
                </select>
            <button type='submit'>Edit Blog</button>
             {/* <button type='submit' disabled>Edit Blog</button> */}
            </form>
        </div>
    )
}
