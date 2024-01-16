import React, { useState } from "react";
import './MainWindow.css';

const MainWindow = () => {
    const [inputMessage, setInputMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const sendMessage = () => {
        if (!inputMessage.trim()) return;
        
        setInputMessage(inputMessage);
        const userMessage = { sender: 'User', message: inputMessage}
        setChatHistory([...chatHistory, { sender: userMessage.sender, message: userMessage.message}]);

        const botResponse = { sender: 'Bot' , message: `Echoing '${inputMessage}'`};
        setChatHistory([...chatHistory, { sender: botResponse.sender, message: botResponse.message }]);
        console.log(chatHistory[0].hasOwnProperty('sender'))
        setInputMessage('');
    };

    function handleInputChange(event: any) {
        setInputMessage(event.target.value);
    }

    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div className="chatbot">
            <div className="chat-history">
                {chatHistory.map((chat, index) => (
                    <div key={index} className={`message ${chat.sender}`}>
                       {chat.sender}:{chat.message} 
                    </div>    
                ))}
            </div>
            <div className="message-input">
                <input
                    type="text"
                    value={inputMessage}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                />
            </div>
        </div>
    );
}


export default MainWindow;