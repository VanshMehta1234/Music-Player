import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/scss/Playlist.scss';
import Container from "../fragment/Container";
import AddPlaylist from './AddPlaylist';
import DeletePlaylist from './DeletePlaylist';

const Playlist = () => {
    const [playlists, setPlaylists] = useState([]);
    const [editPlaylistId, setEditPlaylistId] = useState(null);
    const [editedPlaylistName, setEditedPlaylistName] = useState('');

    useEffect(() => {
        const fetchPlaylists = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/playlists');
                setPlaylists(response.data);
            } catch (error) {
                console.error('Error fetching playlists:', error);
            }
        };

        fetchPlaylists();
    }, []);

    const handleEdit = (playlistId, playlistName) => {
        setEditPlaylistId(playlistId);
        setEditedPlaylistName(playlistName);
    };

    const handleSaveEdit = async (playlistId) => {
        try {
            await axios.put(`http://localhost:8080/api/playlists/${playlistId}`, {
                name: editedPlaylistName
            });
            // Refresh playlists after edit
            const response = await axios.get('http://localhost:8080/api/playlists');
            setPlaylists(response.data);
            // Reset edit state
            setEditPlaylistId(null);
            setEditedPlaylistName('');
        } catch (error) {
            console.error('Error editing playlist:', error);
        }
    };

    return (
        <Container>
            <div className="add-playlist-container">
                <AddPlaylist />
            </div>
            <div className="playlist-container">
                <h2 className="playlist-heading">Playlists</h2>
                <ul className="playlist-list">
                    {playlists.map((playlist) => (
                        <li key={playlist.id} className="playlist-item">
                            {editPlaylistId === playlist.id ? (
                                <>
                                    <input
                                        type="text"
                                        className="Playlist-edit-input"
                                        value={editedPlaylistName}
                                        onChange={(e) => setEditedPlaylistName(e.target.value)}
                                    />
                                    <button className="button edit-button" onClick={() => handleSaveEdit(playlist.id)}>Save</button>
                                </>
                            ) : (
                                <>
                                    <span className="playlist-name">{playlist.name}</span>
                                    <div className="playlist-buttons">
                                        <button className="button edit-button" onClick={() => handleEdit(playlist.id, playlist.name)}>Edit</button>
                                        <DeletePlaylist id={playlist.id} />
                                    </div>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    );
};

export default Playlist;
