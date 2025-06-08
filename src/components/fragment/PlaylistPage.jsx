import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddMusic from './AddMusic';
import MusicCard from './MusicCard'; // Import the MusicCard componen
import MobileTopNavigation from "../fragment/MobileTopNavigation";
import axios from 'axios';
import FooterSelectMusic from "../fragment/FooterSelectMusic";
import CurrentPlayingLarge from "../fragment/CurrentPlayingLarge";
import '../Pages/css/PlaylistPage.css';
import Container from './Container';
import BottomNavigationMobile from "../fragment/BottomNavigationMobile";
import { useSelector } from "react-redux";
import MusicCardContainer from './MusicCardContainer2';
import FooterMusicPlayer from './FooterMusicPlayer';


const PlaylistPage = () => {
    const { id } = useParams();
    const [playlist, setPlaylist] = useState(null);
    const [songs, setSongs] = useState([]);
    const [currMusic, setCurrMusic] = useState(null);
    const { playing, bannerOpen } = useSelector(state => state.musicReducer);

    useEffect(() => {
        setCurrMusic(playing)
    }, [playing]);
    
    useEffect(() => {
        const fetchPlaylist = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/playlists/${id}`);
                setPlaylist(response.data);
            } catch (error) {
                console.error('Error fetching playlist:', error);
            }
        };

        const fetchSongs = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/playlists/${id}/songs`);
                console.log('Response from fetchSongs:', response.data); // Log the response data
                setSongs(response.data);
            } catch (error) {
                console.error('Error fetching songs:', error);
            }
        };
        

        fetchPlaylist();
        fetchSongs();
    }, [id]);

    if (!playlist) {
        return <div>Loading...</div>;
    }

    const handleSongAdded = async (newSong) => {
        try {
            const response=await axios.post(`http://localhost:8080/api/playlists/${id}/songs`, newSong);
            // After adding the song, refresh the page
            setSongs(response.data);
            window.location.reload();
        } catch (error) {
            console.error('Error adding song:', error);
        }
    };

    const handleDeleteSong = async (songId) => {
        try {
            await axios.delete(`http://localhost:8080/api/playlists/${id}/songs/${songId}`);
            // After deletion, fetch songs again to reflect the changes
            const response = await axios.get(`http://localhost:8080/api/playlists/${id}/songs`);
            setSongs(response.data);
        } catch (error) {
            console.error('Error deleting song:', error);
        }
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' ,fontSize : '3rem'}}>{playlist.name}</h1>
            <AddMusic playlistId={id} onSongAdded={handleSongAdded} />
            <div>
                <h2>Songs in Playlist:</h2>
                  <MusicCardContainer songs={songs}/>  
                 {/* <div className="Playlist-container">
                    {
                        songs.map((item)=>(
                            <MusicCard key={item.id} music={item}/>
                        ))
                    }
                </div> */}
            </div>
            
        </div>
    );
};

export default PlaylistPage;
