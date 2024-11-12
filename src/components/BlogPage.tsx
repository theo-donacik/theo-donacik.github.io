import { useEffect, useState } from "react";
import { Post } from "../util/types";
import Markdown from 'react-markdown'

function BlogPage(props : {post: Post}) {
  const [content, setContent] = useState<string>("")

  useEffect(() => {
    fetch(props.post.content)
    .then(resp => resp.text())
    .then(setContent)
  }, [props.post])

  return (
    <div>
      {props.post.title}
      <Markdown>
        {content}
      </Markdown>
    </div>
  )
}

export default BlogPage;