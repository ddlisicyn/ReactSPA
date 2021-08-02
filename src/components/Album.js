import React from 'react';
import PropTypes from 'prop-types';

export function Album({albumId, handleClick}) {
    const onClick = () => {
        handleClick(albumId);
    }
    return (
        <div className="main__profile-album">
            <img onClick={onClick}src="https://image.flaticon.com/icons/png/512/716/716784.png"/>
            <p>Альбом №{albumId}</p>
        </div>
    )
}

Album.propTypes = {
    handleClick: PropTypes.func,
    albumId: PropTypes.number,
}