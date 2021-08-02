import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { Album } from './Album';
import { Photos } from './Photos';

export function Profile(props) {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const data = props.data;
  const openPhotos = (albumId) => {
    setSelectedAlbum(albumId);
  };
  const closePhotos = () => {
    setSelectedAlbum(null);
  };
    return (
      <div className={props.profileVisible ? 'main__profile-show' : 'main__profile-hide'}>
        <div className="main__profile-content">
          <div className="main__profile-header">
            <h1>Автор №{props.userId}</h1>
            <CloseIcon onClick={props.onCloseClick}/>
          </div>
          <hr></hr>
          <Typography className="main__profile-albums"> {
            props.albums.filter(album => album.userId === props.userId)
                  .map(album => {
                    console.log(album);
                    return (<Album albumId={album.id} handleClick={openPhotos}/>)
                  }) 
            }
            <Photos
              photosVisible={!!selectedAlbum}
              onCloseAlbumClick={closePhotos}
              photos={data}
              albumId={selectedAlbum}
            /> 
          </Typography>
        </div>
      </div>
    )
  }

Profile.propTypes = {
    profileVisible: PropTypes.bool,
    userId: PropTypes.number,
    onCloseClick: PropTypes.func,
    albums: PropTypes.array,
}

/* MyComponent.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    optionalArray: PropTypes.array,
    optionalBool: PropTypes.bool,
    optionalFunc: PropTypes.func,
    optionalNumber: PropTypes.number,
    optionalObject: PropTypes.object,
    optionalString: PropTypes.string,
    optionalSymbol: PropTypes.symbol,
   
    // Anything that can be rendered: numbers, strings, elements or an array
    // (or fragment) containing these types.
    optionalNode: PropTypes.node
  } */