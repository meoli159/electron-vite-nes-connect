import React, {useState, useEffect} from 'react';
import SideBar from '../../components/SideBar';

import MainChatDisplay from '../../components/MainChatDisplay';
import FunctionSideBar from '../../components/FunctionSideBar';
import CommunityDisplay from '../../components/CommunityDisplay';
import './style.css';
type DataCommunity = {
  id: number;
  name: string;
};
const dummyData = [
  {id: 1, name: 'Test 1'},
  {id: 2, name: 'Test 2'},
  {id: 3, name: 'Test 3'},
  {id: 4, name: 'Test 4'},
  {id: 5, name: 'Test 5'},
  {id: 6, name: 'Test 6'},
  {id: 7, name: 'Test 7'},
  {id: 8, name: 'Test 8'},
  {id: 9, name: 'Test 9'},
  {id: 10, name: 'Test 10'},
  // {id: 11, name: 'Test 11'},
  // {id: 12, name: 'Test 12'},
  // {id: 13, name: 'Test 13'},
  // {id: 14, name: 'Test 14'},
  // {id: 15, name: 'Test 15'},
  // {id: 16, name: 'Test 16'},
];
export default function MainPage() {
  const [community, setCommunity] = useState<DataCommunity[]>([]);

  useEffect(() => {
    return setCommunity(dummyData);
  }, []);

  return (
    <div className="container">
      <FunctionSideBar className="colum function-sidebar" />
      <SideBar className="column left-sidebar">
        <CommunityDisplay community={community} />
      </SideBar>
      <MainChatDisplay className="column main-chat-display" />
      <SideBar className="column right-sidebar"></SideBar>
    </div>
  );
}
