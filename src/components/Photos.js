import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { Photo } from './Photo';

export function Photos(props) {
    return (
    <div className={props.photosVisible ? 'main__profile-photos-show' : 'main__profile-photos-hide'}>
        <div className="main__album-header">
            <h1>Альбом №{props.albumId}</h1>
            <CloseIcon onClick={props.onCloseAlbumClick}/>
        </div>
        <hr></hr>
        <Typography className="main__album-photos"> {
            props.photos.filter(photo => photo.albumId === props.albumId)
                 .map(photo => (<Photo url={photo.thumbnailUrl} userId={photo.userId}/>))
        }
        </Typography>
    </div> 
    )
}
