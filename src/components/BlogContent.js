import React from "react";

// BlogContent.js
function BlogContent(props) {
  console.log(props);
  return <div>{props.articleText}</div>;
}

export default BlogContent;
