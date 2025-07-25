import React, { useState } from 'react';

function Post(){
    const [post, setPost] = useState({ 
        body: '',
        title: '',
        userId: '',
    });

    const [id, setId] = useState(0);

    function createPost(event) {
        event.preventDefault();
        console.log('Post Data:', post);
        // Here you would typically handle the registration logic, such as sending a request to your server
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setId(json.id);
            setPost({
                body: '',
                title: '',
                userId: '',
            });
        });
    }
        

    function handleChange(event) {
        const { name, value } = event.target;
        console.log(`${name} changed:`, value);
        setPost(prevData => ({
            ...prevData,
            [name]: value
        }));
        console.log('Updated Post Data:', post);
    }

    return (
        <>
        <div className="post-form">
            <h1>Post</h1>
            <form onSubmit={createPost}>
                <label>
                    Title:
                    <input type="text" name="title" value={post.title} onChange={handleChange}/>
                </label>
                <br />
                <label>
                    Body:
                    <input type="text" name="body" value={post.body}  onChange={handleChange}/>
                </label>
                 <br />
                <label>
                    User ID:
                    <input type="text" name="userId" value={post.userId} onChange={handleChange}/>
                </label>
              
                <br />
                <button type="submit">Save</button>
            </form>
        </div>
        <div className="show-post">
            <h2>Post Details</h2>
            <p><strong>Title:</strong> {post.title}</p>
            <p><strong>Body:</strong> {post.body}</p>
            <p><strong>User ID:</strong> {post.userId}</p>
            <p><strong>ID:</strong> {id}</p>
        </div>
        </>
    )
}

export default Post;