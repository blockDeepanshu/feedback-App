import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

const FeedbackContext = createContext();

export const FeedBackProvider = ({ children }) => {
  const [feedback, setFeedbackData] = useState([
    {
      id: 1,
      text: "This is feedback item 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This is feedback item 2",
      rating: 7,
    },
    {
      id: 3,
      text: "This is feedback item 3",
      rating: 8,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedbackData(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedbackHandler = (newFeedback) => {
    newFeedback.id = uuid();
    setFeedbackData([newFeedback, ...feedback]);
  };

  const updateFeedback = (id, updItem) => {
    setFeedbackData(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  const editFeedbackHandler = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteHandler,
        addFeedbackHandler,
        editFeedbackHandler,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
