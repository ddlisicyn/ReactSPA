import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { Album } from './Album';

export function Profile(props) {
    return (
      <div className={props.visible ? 'main__profile-show' : 'main__profile-hide'}>
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
                    return (<Album albumId={album.id}/>)
                  } )
            }
          </Typography> 
{/*           <div className={props.visible ? 'main__profile-photos-show' : 'main__profile-photos-show'}>
              <div className="main__album-header">
                <h1>Альбом №1</h1>
                <CloseIcon onClick={props.onCloseAlbumClick}/>
              </div>
            <hr></hr>
            <Typography className="main__album-photos"> {
                photos.filter(photo => photo.albumId === 2)
                      .map(photo => (<Photo url={photo.thumbnailUrl} author={photo.userId}/>))
              }
            </Typography>
          </div> */}
        </div>
      </div>
    )
  }

Profile.propTypes = {
    visible: PropTypes.bool,
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