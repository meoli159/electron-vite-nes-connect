import React from 'react';
import './style.css';
import ChatHeader from '../chatHeader';
import ChatBox from '../chatBox';
type Props = {
  className: string;
};
export default function mainChatDisplay(prop: Props) {
  return (
    <div className={prop.className}>
      <div className="chat-header">
        <ChatHeader />
      </div>
      <div className="chat-display">mainChatDisplay</div>
      <div className="chat-box">
        <ChatBox />
      </div>
    </div>
  );
}
