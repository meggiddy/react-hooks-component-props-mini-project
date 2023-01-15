function Article({minutes, title, date, preview}) {
  let readTime = minutes;
  let readTimeEmoji = "";
  let readTimeUnit = "min to read";

  if (readTime < 30) {
    const cups = Math.ceil(readTime / 5);
    readTimeEmoji = "☕️".repeat(cups);
  } else {
    const bentos = Math.ceil(readTime / 10);
    readTimeEmoji = "🍱".repeat(bentos);
  }
  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date || "January 1, 1970"}{" "}
        {`${readTimeEmoji} ${readTime} ${readTimeUnit}`}
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
