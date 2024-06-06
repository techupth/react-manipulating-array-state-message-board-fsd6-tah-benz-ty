import { useState } from "react";

function MessageBoard() {
  const [inputMessage, setInputMessage] = useState("");
  const [messageBoard, setMessageBoard] = useState([
    "Hello all ! This is first message.",
  ]);

  const handleInputMessage = (event) => {
    setInputMessage(event.target.value);
  };
  const handleSummitButton = () => {
    if (inputMessage) {
      setMessageBoard([...messageBoard, inputMessage]);
      setInputMessage("");
    }
  };

  const handleDeleteButton = (messageIndex) => {
    const newMessages = messageBoard.filter(
      (_, index) => index !== messageIndex
    );
    setMessageBoard(newMessages);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={handleInputMessage}
            value={inputMessage}
          />
        </label>
        <button className="submit-message-button" onClick={handleSummitButton}>
          Submit
        </button>
      </div>
      <div class="board">
        {messageBoard.map((message, index) => {
          return (
            <div className="message" key={index}>
              <h1>{message}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  handleDeleteButton(index);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
