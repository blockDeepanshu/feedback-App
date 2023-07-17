import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import FeedBackList from "./components/FeedBackList";
import Header from "./components/Header";

import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./components/pages/About";
import AboutIconLink from "./components/AboutIconLink";
import { FeedBackProvider } from "./context/FeedbackContext";

function App() {
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
                  <FeedbackForm />
                  <FeedbackStats />
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
