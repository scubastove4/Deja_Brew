const ReviewCard = ({ review, updateReview }) => {
  return (
    <div onClick={() => updateReview(review)}>
      <h3>{review.author}</h3>
      <h3>{review.rating}</h3>
      <p>{review.comment}</p>
    </div>
  )
}

export default ReviewCard
