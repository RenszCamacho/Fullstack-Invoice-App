import React from 'react';
import avatar from '../../../assets/avatar.png';

function Avatar() {
  return (
    <div className="header-container__avatar">
      <img src={avatar} alt="avatar" />
    </div>
  );
}

export default Avatar;
