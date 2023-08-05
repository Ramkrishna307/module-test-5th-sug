// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom'; // Import useParams hook
// import HomeDetailWrapper from './HomeDetailWrapper';

// const Detail = () => {
//   const { id } = useParams(); // Use the useParams hook to get the id parameter
//   const { posts } = useSelector((state) => state);
//   const post = posts.find((p) => p.id === parseInt(id));

//   if (!post) {
//     return <div>Post not found!</div>;
//   }

//   return (
//     <div>
//       <h1>Detail Page</h1>
//       <h3>{post.title}</h3>
//       <p>{post.body}</p>
//       <p>User ID: {post.userId}</p>
//       <img src={`https://picsum.photos/200?random=${post.id}`} alt={`Post ${post.id}`} />
//       <HomeDetailWrapper />
//     </div>
//   );
// };


import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import HomeDetailWrapper from './HomeDetailWrapper';
import './detail.css';

const Detail = () => {
  const { id } = useParams();
  const { posts } = useSelector((state) => state);
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <>
    <div className="detail-container">
      
    
    
      <div>
    <p className="detail-user">User ID: {post.userId}</p>
      <img className="detail-image" src={`https://picsum.photos/200?random=${post.id}`} alt={`Post ${post.id}`} />
      </div>
     
      <div className='divmyfav'>
      <div className="detail-button-container">
        <div>
        <button className="detail-button">Detail</button>
        <button id='button2'className="detail-button">UserInfo</button>
        </div>
      </div>

      <div className='textimage'>
      <h1 className="detail-title">{post.title}</h1>
      <p className="detail-body">{post.body}</p>
      </div>

      </div>
      </div>
      <HomeDetailWrapper />
   </>
  );
};

export default Detail;





