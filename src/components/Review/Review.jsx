const Review = ({ Review }) => {
  return (
    <div className="review">
      <h5>{Review.userForDisplayDto}</h5>
      <p>{Review.Text}</p>
      <h5>{Review.Rating}</h5>
    </div>
  );
};

export default Review;
