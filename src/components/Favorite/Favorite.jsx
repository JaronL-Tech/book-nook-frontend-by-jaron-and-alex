const Favorite = ({ title, thumbnailUrl }) => {
  console.log(thumbnailUrl);
  return (
    <div className="favorite">
      <img src={thumbnailUrl} alt="thumbail" />
      <h4>{title}</h4>
    </div>
  );
};

export default Favorite;
