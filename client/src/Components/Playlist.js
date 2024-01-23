import React from 'react';

const Playlist = ({ playlistData }) => {
  return (
    <div className="column">
      <h2>Playlist</h2>
      <ul>
        {playlistData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;