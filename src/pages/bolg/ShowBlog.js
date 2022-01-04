import React from 'react'
import { useParams } from 'react-router-dom'

export default function ShowBlog() {
    const { id } = useParams();
    return (
        <div>
            <h1>blog number is - { id } </h1>
        </div>
    )
}
