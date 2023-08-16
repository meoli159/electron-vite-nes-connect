import React from 'react';
import SettingIcon from '../../../assets/setting.svg';
import {Link} from 'react-router-dom';
type props = {
  className: string;
};

export default function index({className}: props) {
  return (
    <div className={className}>
      This is function sidebar
      <div className="setting-icon">
        <Link to={'/setting'}>
          <img src={SettingIcon} />
        </Link>
      </div>
    </div>
  );
}
