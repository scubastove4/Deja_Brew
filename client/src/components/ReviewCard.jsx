const ReviewCard = ({ review, updateReview }) => {
  return (
    <div onClick={() => updateReview(review)} className="review">
      <h3>Name: {review.author}</h3>
      <h3>Rating: {review.rating}</h3>
      <p>Review: {review.comment}</p>
    </div>
  )
}

export default ReviewCard
