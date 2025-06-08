// AddMusic.js
import React, { useState } from 'react';
import axios from 'axios';

const AddSong = ({ playlistId, onSongAdded }) => {
    const [song, setSong] = useState({ name: '', artist: '', album: ''});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return; // Prevent multiple submissions
        setIsSubmitting(true); // Set submitting flag to true
        try {
            const response = await axios.post(`http://localhost:8080/api/playlists/${playlistId}/songs`, song);
            console.log('Song added to playlist:', response.data);// Call the callback function to notify PlaylistPage of the added song
            setSong({ name: '', artist: '', album: ''}); // Reset the form fields after submission
        } catch (error) {
            console.error('Error adding song to playlist:', error);
        } finally {
            setIsSubmitting(false); // Reset submitting flag after submission
        }
    };

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Add Song to Playlist</h2>
            <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
                <input
                    type="text"
                    value={song.name}
                    onChange={(e) => setSong({ ...song, name: e.target.value })}
                    placeholder="Enter song name"
                />
                <input
                    type="text"
                    value={song.artist}
                    onChange={(e) => setSong({ ...song, artist: e.target.value })}
                    placeholder="Enter artist"
                />
                <input
                    type="text"
                    value={song.album}
                    onChange={(e) => setSong({ ...song, album: e.target.value })}
                    placeholder="Enter album"
                />
                <button type="submit" disabled={isSubmitting}>Add Song to Playlist</button>
            </form>
        </div>
    );
};

export default AddSong;
