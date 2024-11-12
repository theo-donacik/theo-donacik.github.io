import { Card, Col, Container, Row } from 'react-bootstrap';
import BlogPage from '../components/BlogPage';
import { posts } from '../data/blogPosts/blogPosts'
import BlogTile from '../components/BlogTile';


function Blog() {
  return (
    <>
      {
        posts.map((post) => (
          <BlogTile post={post}/>
        ))
      }
    </>
  )
}

export default Blog;
