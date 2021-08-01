import React from 'react';
import PropTypes from 'prop-types'

export function Album(props) {
    return (
        <div className="main__profile-album">
            <img onClick={props.handleClick}src="https://image.flaticon.com/icons/png/512/716/716784.png"/>
            <p>Альбом №{props.albumId}</p>
        </div>
    )
}

Album.propTypes = {
    handleClick: PropTypes.func,
    albumId: PropTypes.number,
}