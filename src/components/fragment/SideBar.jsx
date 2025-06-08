import React, { useContext, useState, useEffect } from "react";
import "../assets/scss/SideBar.scss";
import SideBarOptions from "./SideBarOptions";
import { ThemeContext } from "../../api/Theme";
import { ExploreOutlined, HomeOutlined, PlaylistPlayOutlined, SearchOutlined } from "@material-ui/icons";
import axios from "axios";
import { Link } from "react-router-dom";

function SideBar() {
    const useStyle = useContext(ThemeContext);
    const [playlistNames, setPlaylistNames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchPlaylists = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:8080/api/playlists', {
                    cancelToken: source.token
                });
                
                if (isMounted) {
                    setPlaylistNames(response.data.map(playlist => ({ 
                        id: playlist.id, 
                        name: playlist.name 
                    })));
                    setLoading(false);
                }
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('Request canceled:', error.message);
                } else {
                    console.error('Error fetching playlists:', error);
                    if (isMounted) {
                        setLoading(false);
                    }
                }
            }
        };

        fetchPlaylists();

        // Cleanup function
        return () => {
            isMounted = false;
            source.cancel('Component unmounted');
        };
    }, []);

    return (
        <aside style={useStyle.component} className={"aside-bar"}>
            <div className="aside-bar-container">
                <p className={"p1"}>
                    <span>LIBRARY</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={HomeOutlined} href={"/home"} title={"Home"} />
                <SideBarOptions className={"lib-sub"} Icon={ExploreOutlined} href={"/home/about"} title={"About"} />
                <SideBarOptions className={"lib-sub"} Icon={SearchOutlined} href={"/home/search"} title={"Search"} />
                <p className={"p1"}>
                    <span style={{ textDecoration: 'none' }}><Link to="/home/playlist">PLAYLISTS</Link></span>
                </p>
                {!loading && playlistNames.map((playlist) => (
                    <SideBarOptions 
                        key={playlist.id} 
                        className={"lib-sub"} 
                        Icon={PlaylistPlayOutlined} 
                        href={`/home/playlist/${playlist.id}`} 
                        title={playlist.name} 
                    />
                ))}
            </div>
        </aside>
    );
}

export default SideBar;
