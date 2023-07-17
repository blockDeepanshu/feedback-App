import React, { useContext } from "react";

import FeedBackItem from "./FeedBackItem";

import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/spinner";

function FeedBackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedBackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedBackList;
