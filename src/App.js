import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import CommentList from "./components/CommentList";
import Loader from "./components/Loader";
import "./index.css";

const App = () => {
  const [postId, setPostId] = useState(3);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );
        const data = await response.json();

        // Simulate longer loading time
        setTimeout(() => {
          setComments(data);
          setLoading(false);
        }, 1000); // 2000ms delay
      } catch (error) {
        console.error("Error fetching comments:", error);
        setLoading(false);
      }
    };

    fetchComments();
  }, [postId]);

  const handleButtonClick = () => {
    const randomId = Math.floor(Math.random() * 10) + 1;
    setPostId(randomId);
  };

  return (
    <div className="app">
      <Button onClick={handleButtonClick} />
      {loading ? <Loader /> : <CommentList comments={comments} />}
    </div>
  );
};

export default App;
