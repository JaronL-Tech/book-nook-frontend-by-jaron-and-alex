const Favorite = ({ Favorite }) => {
  return (
    <div className="favorite">
      <h5>{Favorite.BookDetailsDto}</h5>
      <p>{Favorite.BookId}</p>
      <h5>{Favorite.AverageRating}</h5>
    </div>
  );
};

export default Favorite;
