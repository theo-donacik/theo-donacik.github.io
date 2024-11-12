import { Card } from "react-bootstrap";
import { Post } from "../util/types";

function BlogTile(props: {post: Post}) {
  return (
    <div>
      <a href={"/blog/" + props.post.id}>
        <Card> 
          {props.post.title}
        </Card>
      </a>
    </div>
  )
}

export default BlogTile;