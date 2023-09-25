import axios from "axios";
import react from "react";
import { useState } from "react";

const ReviewForm = ({ fetchBookDetailsDto, bookDetails, user, token }) => {
  const [submitting, setsubmitting] = useState(false);
  const [BookId, setBookId] = useState("");
  const [Text, setText] = useState("");
  const [Rating, setRating] = useState(0);

  const handdleSubmit = async (e) => {
    e.preventDefault();
    setsubmitting(true);

    const formData = {
      bookId: bookDetails.bookId,
      Text,
      Rating,
      userId: user.id,
    };

    try {
      const response = await axios.post(
        "https://localhost:5001/api/reviews/",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.status === 201) {
        fetchBookDetailsDto(BookId);
      }
    } catch (error) {
      console.warn("Error submitting new Title form");
    }
  };

  return (
    <form onSubmit={handdleSubmit} className="Flex-item">
      <h4>Add Review</h4>
      <div>
        <div>
          <label>Text</label>
          <input value={Text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div>
          <label>Rating</label>
          <input
            type="number"
            max="5"
            min="0"
            value={Rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
      </div>
      <button type="submit">Add Review</button>
    </form>
  );
};

export default ReviewForm;
