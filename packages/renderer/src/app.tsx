import React from 'react';
import GroupChatSideBar from './components/groupChatSideBar';
import GroupUserDisplay from './components/groupUserSideBar';
import MainChatDisplay from './components/mainChatDisplay';
import './app.css';
const App: React.FC = () => {
  return (
    <div className="app">
      <div className="container">
        <GroupChatSideBar className="column gr-chat-sidebar" />
        <MainChatDisplay className="column main-chat-display" />
        <GroupUserDisplay className="column gr-user-sidebar" />
      </div>
    </div>
  );
};
export default App;
