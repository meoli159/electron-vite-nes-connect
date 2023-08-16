import React from 'react';
import type {ReactNode} from 'react';
// import CommunityDisplay from '../communityDisplay';
// import './style.css';
type Props = {
  className: string;
  children?: ReactNode;
};

export default function SideBar({className, children}: Props) {
  return (
    <div className={className}>
      <h5> this is SideBar </h5>
      <div>{children}</div>
    </div>
  );
}
