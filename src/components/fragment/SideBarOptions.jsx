import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function SideBarOptions(props) {
    const Icon = props.Icon;
    const title = props.title;
    const className = props.className;
    const href = props.href;
    const playlists = props.playlists || []; // Extract playlists prop or use an empty array if not provided

    return (
        <Button className={className} startIcon={Icon && <Icon/>} component={Link} to={href}>
            {title}
            {playlists.length > 0 && ( // Render playlist names if there are playlists available
                <ul>
                    {playlists.map((playlist, index) => (
                        <li key={index}>{playlist}</li>
                    ))}
                </ul>
            )}
        </Button>
    );
}

export default SideBarOptions;
