import React, { useState, useEffect, useCallback } from 'react';
import Post from './Post';

function App() {
  const [timer, setTimer] = useState(0);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);


  const addPost = useCallback(() => {
    if (title && body) {
      const newPost = {
        id: posts.length,
        title,
        body,
        verifyPost: false,
      };
      console.log(newPost)
      setPosts([...posts, newPost]);
      setTitle('');
      setBody('');
    }
  }, [title, body]);

  return (
    <div>
      <h1>Timer: {timer}</h1>
      <div>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} />
        <button onClick={addPost}>Add Post</button>
      </div>
      <div>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default App;


