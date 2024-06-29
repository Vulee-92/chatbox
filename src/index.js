import React from 'react';
import ReactDOM from 'react-dom';
import Chatbot from './components/Chatbot';

window.Chatbox = {
  renderChatbot: (elementId, websocketUrl) => {
    const element = document.getElementById(elementId);
    if (element) {
      ReactDOM.render(<Chatbot websocketUrl={websocketUrl} />, element);
    } else {
      console.error(`Element with id "${elementId}" not found`);
    }
  }
};
