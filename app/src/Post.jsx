import React, { useCallback, useMemo, useState } from 'react';

const Post = React.memo(({ post }) => {
  const [verified, setVerified] = useState(post.verifyPost);


  const toggleVerify = useCallback(() => {
    setVerified(prevVerified => !prevVerified);
  }, [verified]);

  const bgColor = useMemo(() => `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`, [verified]);

  return (
    <div style={{ backgroundColor: bgColor, padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={toggleVerify}>{verified ? 'Verified' : 'Verify'}</button>
    </div>
  );
});

export default Post;
