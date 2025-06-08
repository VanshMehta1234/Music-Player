// AddPlaylist.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AddPlaylist = () => {
  const [playlistName, setPlaylistName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/playlists', {
        name: playlistName
      });
      console.log('Playlist added:', response.data);
      setPlaylistName('');
      window.location.reload(); // Reload the page
    } catch (error) {
      console.error('Error adding playlist:', error);
    }
  };


  return (
    <div>
 <h2 style={{ textAlign: 'center' }}>Add Playlist</h2>
      <div style={{ textAlign: 'center' }}>
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      value={playlistName}
      onChange={(e) => setPlaylistName(e.target.value)}
      placeholder="Enter playlist name"
    />
    <button type="submit">Add Playlist</button>
  </form>
</div>

    </div>
  );
};

export default AddPlaylist;
