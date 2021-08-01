import React from 'react';
import PropTypes from 'prop-types';


export function Photo({url, handleClick, userId}) {
    const onClick = () => {
        handleClick(userId);
    }
    return (
        <div className="main__photos-item">
            <img src={url} alt="color-box 150x150"/>
            <p onClick={onClick}><i>Автор №{userId}</i></p>
        </div>
    )
}

Photo.propTypes = {
    url: PropTypes.string,
    handleClick: PropTypes.func,
    userId: PropTypes.number,
}