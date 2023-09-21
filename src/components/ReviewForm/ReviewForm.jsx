import axios from "axios";
import react from "react";
import { useState } from "react";

const ReviewForm = ({ onNewBook }) => {
  const [submitting, setsubmitting] = useState(false);
  const [BookId, setBookId] = useState("");
  const [Text, setText] = useState("");
  const [Rating, setRating] = useState("");

  const handdleSubmit = async (e) => {
    e.preventDefault();
    setsubmitting(true);

    const formData = [BookId, Text, Rating];

    try {
      const response = await axios.post(
        "https://localhost:5001/api/reviews/",
        formData
      );
      if (response.status === 201) {
        onNewBook();
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
          <label>BookId</label>
          <input value={BookId} onChange={(e) => setBookId(e.target.value)} />
        </div>
        <div>
          <label>Text</label>
          <input value={Text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div>
          <label>Rating</label>
          <input value={Rating} onChange={(e) => setRating(e.target.value)} />
        </div>
      </div>
      <button type="submit">Add Review</button>
    </form>
  );
};

export default ReviewForm;
