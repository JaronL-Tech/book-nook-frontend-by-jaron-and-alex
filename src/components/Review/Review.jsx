const Review = ({ username, text, rating }) => {
  return (
    <div className="review">
      <h5>{username}</h5>
      <p>{text}</p>
      <h5>{rating}</h5>
    </div>
  );
};

export default Review;
