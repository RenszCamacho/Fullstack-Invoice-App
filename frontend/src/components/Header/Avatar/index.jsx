import React from 'react';
import { useSelector } from 'react-redux';

function Avatar() {
  const avatar = useSelector((store) => store.accesstoken);

  return (
    <div className="header-container__avatar">
      <img
        className="avatar__logo"
        src={avatar?.user?.image}
        alt="avatar"
      />
    </div>
  );
}

export default Avatar;
