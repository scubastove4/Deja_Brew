const ReviewForm = ({ newReview, newReviewInput, addNewReview }) => {
  return (
    <form onSubmit={(e) => addNewReview(e)}>
      <section>
        <input
          id="author"
          type="text"
          value={newReview.author}
          onInput={newReviewInput}
          placeholder="Nickname"
        />
        <input
          id="rating"
          type="text"
          value={newReview.rating}
          onInput={newReviewInput}
          placeholder="Rating 0-5"
        />
      </section>
      <textarea
        id="comment"
        value={newReview.comment}
        onInput={newReviewInput}
        placeholder="Add a comment!"
      ></textarea>
      <button type="submit">Create Review!</button>
    </form>
  )
}

export default ReviewForm
