import React from 'react';

const Posts = ({
 posts,
 loading
}) => {


 if (loading) {
  <h2>Loading..</h2>;
 } else {

  return <ul className="list-group mb-4">
   {
    posts.map((post) => (
     <li
      key={post.id}
      className="list-group-item"
     >
      {post.title}
     </li>
    ))
   }
  </ul>;
 }

 return (
  <div>

  </div>
 );
};

export default Posts;
