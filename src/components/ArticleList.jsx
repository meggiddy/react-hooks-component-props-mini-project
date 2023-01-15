import React from "react";
import blogData from "../data/blog";

function ArticleList() {
  const articles = blogData.posts.map((post) => {
    let readTime = post.minutes;
    let readTimeEmoji = "";
    let readTimeUnit = "min read";

    if (readTime < 30) {
      const cups = Math.ceil(readTime / 5);
      readTimeEmoji = "☕️".repeat(cups);
    } else {
      const bentos = Math.ceil(readTime / 10);
      readTimeEmoji = "🍱".repeat(bentos);
    }
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <small>
          {post.date || "January 1, 1970"} {`${readTimeEmoji} ${readTime} ${readTimeUnit}`}
        </small>
        <p>{post.preview}</p>
      </article>
    );
  });
  return (
    <main>
      <ol>{articles}</ol>
    </main>
  );
}

export default ArticleList;
