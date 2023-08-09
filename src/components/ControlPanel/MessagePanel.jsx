import cssStyle from "./MessagePanel.module.css";
import Modal from "../UtilsComponents/Modal";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const MessagePanel = (props) => {
  const [message, setMessage] = useState("");

  const status = useSelector((state) => {
    return state.scores.gameStatus;
  });

  useEffect(() => {
    if (status === "won") {
      setMessage("Congratulation !!! You have won");
    } else if (status === "lost") {
      setMessage("Sorry, you've lost");
    }
  }, [status]);

  return (
    <Modal onClose={props.onClose}>
      <div className={cssStyle.messageHolder}>
        <div className={cssStyle.textHolder}>
          <p className={cssStyle.textMessage}>{message}</p>
        </div>
      </div>
    </Modal>
  );
};

export default MessagePanel;
