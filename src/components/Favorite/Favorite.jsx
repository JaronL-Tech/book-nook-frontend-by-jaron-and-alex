const Favorite = ({ title, thumbnailUrl }) => {
  return (
    <div className="favorite">
      <img src={thumbnailUrl} alt="thumbail" />
      <h4>{title}</h4>
    </div>
  );
};

export default Favorite;
