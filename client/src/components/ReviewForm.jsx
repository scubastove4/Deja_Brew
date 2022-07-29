const ReviewForm = ({ newReview, newReviewInput, addNewReview }) => {
  return (
    <form onSubmit={(e) => addNewReview(e)}>
      <section id="reviewFormSection">
        <input
          id="author"
          type="text"
          value={newReview.author}
          onInput={newReviewInput}
          placeholder="Name"
        />
        <div id="newRatingDiv">
          <input
            id="newRating"
            type="range"
            min="0"
            max="5"
            step=".1"
            value={newReview.rating}
            onChange={newReviewInput}
          />
        </div>
        <label htmlFor="newRating">{newReview.rating}</label>
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
