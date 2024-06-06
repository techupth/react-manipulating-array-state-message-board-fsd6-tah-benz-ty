import { useState } from "react";

function MessageBoard() {
  const [inputMessage, setImputMessage] = useState(``);
  const [message, setMessage] = useState([
    "Hello all ! This is first message.",
  ]);

  const handleInputMessage = (event) => {
    setImputMessage(event.target.value);
  };

  const handleInputChange = () => {
    if (inputMessage) {
      const newMessage = [...message, inputMessage];
      setMessage(newMessage);
      setImputMessage("");
    }
  };

  const handleDelete = (index) => {
    const newMessages = [...message];
    newMessages.splice(index, 1);
    setMessage(newMessages);
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
            value={inputMessage}
            onChange={handleInputMessage}
          />
        </label>
        <button className="submit-message-button" onClick={handleInputChange}>
          Submit
        </button>
      </div>
      <div class="board">
        {message.map((message, index) => {
          return (
            <div className="message" key={index}>
              <h1>{message}</h1>
              <button
                className="delete-button"
                onClick={() => handleDelete(index)}
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
