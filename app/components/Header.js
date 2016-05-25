import React from 'react';
import { Link } from 'react-router';

const Blog = () => (
  <div>
    <Link to="/"><h1>Draw by Night!</h1></Link>
    <nav>
      <Link activeStyle={{color:'green'}} to="/about">About</Link>
      <Link activeStyle={{color:'green'}} to="/blog">Blog</Link>
    </nav>
  </div>
)

export default Blog;
