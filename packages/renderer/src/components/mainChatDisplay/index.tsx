import React from 'react';
import './style.css';
import ChatName from '../ChatName';
type Props = {
  className: string;
};
export default function MainChatDisplay(prop: Props) {
  return (
    <div className={prop.className}>
      <div className="chat-name">
        <ChatName />
      </div>
      <div className="chat-display">mainChatDisplay</div>
      <div className="chat-box">
        <form className="chat-form">
          <input
            type="text"
            placeholder="Message"
          />
        </form>
      </div>
    </div>
  );
}
