import React from "react"
import '../assets/scss/MusicCardContainer.scss';
import MusicCard from "./MusicCard";
import Container from "./Container";

function MusicCardContainer({songs}) {
    
    return (
        <Container>
            <div className={"music-card-container"}>
                {
                    songs.map(item => (
                        <MusicCard key={item.id} music={item}/>
                    ))
                }
            </div>
        </Container>
    );
}

export default MusicCardContainer;
