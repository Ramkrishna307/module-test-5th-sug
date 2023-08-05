// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { fetchPosts } from '../redux/actions';
// import './Home.css';
// const Home = () => {
//   const dispatch = useDispatch();
//   const { posts, loading, error } = useSelector((state) => state);

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             <Link to={`/item/${post.id}`}>
//               <h3>{post.title}</h3>
//               <p>{`${post.body.slice(0, 100)}${post.body.length > 100 ? '...' : ''}`}</p>
//               <img src={`https://picsum.photos/200?random=${post.id}`} alt={`Post ${post.id}`} />
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home;
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { fetchPosts } from '../redux/actions';
// import './Home.css'; // Import the CSS for the Home component

// const Home = () => {
//   const dispatch = useDispatch();
//   const { posts, loading, error } = useSelector((state) => state);

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="home-container">
//       <h1>Beautiful Home Page</h1>
//       <div className="post-table">
//         {posts.map((post) => (
//           <div key={post.id} className="post-card">
//             <img src={`https://picsum.photos/200?random=${post.id}`} alt={`Post ${post.id}`} />
//             <div className="post-card-content">
//               <h3>{post.title}</h3>
//               <p>{`${post.body.slice(0, 100)}${post.body.length > 100 ? '...' : ''}`}</p>
//               <Link to={`/item/${post.id}`}>Read More</Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../redux/actions';
import './Home.css'; //Import the CSS for the Home component

const ClickablePost = ({ post, onClick }) => {
  return (
    <>
    
    <div className="post-card" onClick={() => onClick(post)}>
      <img src={`https://picsum.photos/200?random=${post.id}`} alt={`Post ${post.id}`} />
      <div className="post-card-content">
        <h3>{post.title}</h3>
        <p>{`${post.body.slice(0, 100)}${post.body.length > 100 ? '...' : ''}`}</p>
        <Link to={`/item/${post.id}`}>Read More</Link>
      </div>
    </div>

    </>
  );
};

const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handlePostClick = (clickedPost) => {
    const newPosts = posts.filter((post) => post.id !== clickedPost.id);
    newPosts.unshift(clickedPost);
    // Update the state with the new order
    dispatch({ type: 'SET_POSTS', payload: newPosts });
  };

  return (
    <div className="home-container">
      <h1>Social Media For Travellers</h1>
      <div>
      <input
      id='input'
        type="text"
        placeholder="Search..."
      />
      
    </div>
      <div className="post-table">
        {posts.map((post) => (
          <ClickablePost key={post.id} post={post} onClick={handlePostClick} />
        ))}
      </div>
    </div>
  );
};

export default Home;
