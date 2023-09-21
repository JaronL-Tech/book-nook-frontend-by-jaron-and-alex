const Review = ({ bookid }) => {
  const handleclick = (e) => {
    console.log(e);
  };

  return (
    <div className="review">
      <span>{bookid}</span>
      <button onClick={handleclick}>Favorite</button>
    </div>
  );
};

export default Review;
