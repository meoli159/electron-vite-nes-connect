import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
type DataCommunity = {
  id: number;
  name: string;
};
type Props = {
  community: DataCommunity[];
};
export default function index({community}: Props) {
  return (
    <div className="community-container">
      {community.map(c => (
        <div
          className="community-display"
          key={c.id}
        >
          <Link to={'#'}>{c.name}</Link>
        </div>
      ))}
    </div>
  );
}
