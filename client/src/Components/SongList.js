import React from 'react';

const Songlist = ({ songlistData }) => {
  return (
    <div className="column">
      <h2>Songlist</h2>
      <ul>
        {songlistData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Songlist;