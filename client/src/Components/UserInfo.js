import React from 'react';

const UserInfo = ({ userInfoData }) => {
  return (
    <div className="column">
      <h2>User Info/Favorites</h2>
      <div>{userInfoData}</div>
    </div>
  );
};

export default UserInfo;