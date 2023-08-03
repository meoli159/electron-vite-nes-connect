import React from 'react';
import CommunityDisplay from '../communityDisplay';
// import './style.css';
type Props = {
  className: string;
};

export default function groupChatSideBar(prop: Props) {
  return (
    <div className={prop.className}>
      <p> groupChatSideBar </p>
      <div>
        <CommunityDisplay />
      </div>
    </div>
  );
}
