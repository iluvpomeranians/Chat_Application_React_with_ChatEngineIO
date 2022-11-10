import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";

const MessageForm = (props) => {

    const [value, setValue] = useState('');
    const {chatId, creds} = props; 

    //Handle Changes - Set values/isTyping
    const handleChange = (event) => {
        setValue(event.target.value);
        isTyping(props, chatId);
    }

    //Submitting Text
    const handleSubmit = (event) => {
        event.preventDefault();
        const text = value.trim();
        if(text.length > 0){ sendMessage(creds, chatId, { text })};
        setValue('');
    }

    //Image Uploads
    const handleUpload = (event) => {

        sendMessage(creds, chatId, { files: event.target.files, text: ''})

    }

    input.addEventListener("keypress", function(event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
          // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click
          document.getElementById("myBtn").click();
        }
      });

    return(
       <form className="message-form" onSubmit={handleSubmit}>
            <input
                className="message-input"
                placeholder="Send a message..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            {/* Upload Button */}
            <label htmlFor="upload-button"> 
                <span className="image-button">
                    <PictureOutlined className='picture-icon' />
                </span>
            </label>
            <input
                type="file"
                multiple={false}
                id="upload-button"
                style={{ display: 'none'}}
                onChange={handleUpload.bind(this)}
            />
             {/* Message Submit Button */}
            <button type="submit" className="send-button">
                <SendOutlined className="send-icon" />
            </button>
       </form>
    );
}

export default MessageForm; 