import { FaEdit, FaTimes } from "react-icons/fa";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedBackItem({ item }) {
  const { deleteHandler, editFeedbackHandler } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="edit">
        <FaEdit color="purple" onClick={() => editFeedbackHandler(item)} />
      </button>
      <button className="close" onClick={() => deleteHandler(item.id)}>
        <FaTimes color="purple" />
      </button>

      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedBackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedBackItem;
