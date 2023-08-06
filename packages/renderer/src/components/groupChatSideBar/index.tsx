import React from 'react';
import CommunityDisplay from '../communityDisplay';
// import './style.css';
type Props = {
  className: string;
};

export default function groupChatSideBar(prop: Props) {
  return (
    <div className={prop.className}>
      <h5> groupChatSideBar </h5>
      <div>
        <CommunityDisplay />
      </div>
    </div>
  );
}
