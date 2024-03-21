package org.example.mplayer.repositories;

import org.example.mplayer.models.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SongRepository extends JpaRepository<Song, Long> {
    Optional<Song> findByNameAndPlaylistsId(String musicName, Long playlistId);
}
