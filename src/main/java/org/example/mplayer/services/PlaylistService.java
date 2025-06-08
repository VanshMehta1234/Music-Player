package org.example.mplayer.services;

import org.example.mplayer.models.Playlist;
import org.example.mplayer.models.Song;
import org.example.mplayer.repositories.PlaylistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PlaylistService {

    private final PlaylistRepository playlistRepository;

    @Autowired
    public PlaylistService(PlaylistRepository playlistRepository) {
        this.playlistRepository = playlistRepository;
    }

    public List<Song> getSongsByPlaylistId(Long id) {
        Optional<Playlist> playlistOptional = playlistRepository.findById(id);
        if (playlistOptional.isPresent()) {
            Playlist playlist = playlistOptional.get();
            List<Song> songs = new ArrayList<>(playlist.getSongs());

            // Now, you have all fields populated in each song

            return songs;
        } else {
            throw new IllegalArgumentException("Playlist not found with id: " + id);
        }
    }
}
