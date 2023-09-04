import React, { useState } from "react";
import "../style/CommentComponent.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CommentComponent() {
  const navigate = useNavigate();
  const currentURL = window.location.href;
  const urlSegments = currentURL.split("/");
  const lastSegment = urlSegments[urlSegments.length - 1];
  const dataSend = { id: lastSegment };

  const [rateData, setRateData] = useState("0");
  const [data, setData] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");

  React.useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL + "getComments.php";
    axios
      .post(apiUrl, dataSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const commentDataSend = {
    destination_id: lastSegment,
    user_id: localStorage.getItem("user"),
    grade: rateData,
    opinion: newCommentText,
  };

  const addComment = () => {
    if (rateData === "0" || newCommentText.length === 0) {
      alert("Fill in all inputs");
    } else {
      const apiUrl = process.env.REACT_APP_API_URL + "createComment.php";
      axios
        .post(apiUrl, commentDataSend, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.data["status"] === "inserted") {
            alert("Commented");
            navigate("/");
          } else {
            alert("Error");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const comments = (
    <ul>
      {data.map((comment, index) => (
        <li key={index}>
          {comment.name +
            " " +
            comment.surname +
            ": " +
            comment.opinion +
            " (" +
            comment.grade +
            " Stars)"}
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <h2>Comments</h2>

      {comments}
      <div className="comments-component">
        {/* Input field for new comment */}
        <input
          type="textarea"
          placeholder="Add a comment..."
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
        />
        <div className="rating">
          <select onChange={(e) => setRateData(e.target.value)}>
            <option value="0">Select Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <button onClick={addComment}>Add Comment</button>
      </div>
    </div>
  );
}

export default CommentComponent;
