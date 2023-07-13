import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import FeedBackList from "./components/FeedBackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedBackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./components/pages/About";
import AboutIconLink from "./components/AboutIconLink";
import { FeedBackProvider } from "./context/FeedbackContext";

function App() {
  const [feedbackData, setFeedbackData] = useState(FeedbackData);

  const addFeedbackHandler = (newFeedback) => {
    newFeedback.id = uuid();
    setFeedbackData([newFeedback, ...feedbackData]);
  };

  return (
    <FeedBackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm addHandle={addFeedbackHandler} />
                  <FeedbackStats feedback={feedbackData} />
                  <FeedBackList />
                  <AboutIconLink />
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </FeedBackProvider>
  );
}

export default App;
