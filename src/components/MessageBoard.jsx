import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState([]);
  const [messageText, setMessageText] = useState("");

  const handleMessageTextChange = (event) => {
    setMessageText(event.target.value);
  };

  const addMessage = (event) => {
    event.preventDefault();
    const newMessage = [...message];
    newMessage.push(messageText);
    setMessage(newMessage);
  };

  const deleteMessage = (deleteIndex) => {
    const newMessage = [...message];
    newMessage.splice(deleteIndex, 1);
    setMessage(newMessage);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={messageText}
            onChange={handleMessageTextChange}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>
          Submit
        </button>
      </div>
      <div className="board">
        {message.map((text, index) => (
          <div className="message">
            <h1 key={index}>{text}</h1>
            <button className="delete-button" onClick={deleteMessage}>
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
