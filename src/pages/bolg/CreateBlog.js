import React from 'react'
import { useState } from 'react/cjs/react.development'
// import { useHistory } from 'react-router-dom';//react-router-dom 5
import { useNavigate } from 'react-router-dom';//react-router-dom 6
import loading from '../../images/loading.gif';


export default function CreateBlog() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useNavigate();

    //create new blog
    function createBlog(e) {
        e.preventDefault();
        const blog = { title, body, author }
        setIsPending(true);
        setTimeout(() => {
            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(blog)
            }).then(() => {
                setIsPending(false);
                console.log("create new blog")
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
            <form onSubmit={createBlog}>
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
                </select>
                {!isPending && <button type='submit'>Add Blog</button>}
                {isPending && <button type='submit' disabled>Add Blog</button>}
            </form>
        </div>
    )
}
