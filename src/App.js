import './App.css';
import React, { useEffect, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import CloseIcon from '@material-ui/icons/Close';

export default function App() {

  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [albums, setAlbums] = useState([]);
  const [profileModificator, setProfileModificator] = useState('main__profile-hide');
  const openProfile = (event, profileModificator) => {
    setProfileModificator('main__profile-show');
  };
  const closeProfile = (event, profileModificator) => {
    setProfileModificator('main__profile-hide');
  };
  const handleChange = (event, page) => {
    setPage(page);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => setPhotos(json));

    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(json => setAlbums(json));
  }, []);

  const numberOfPages = new Set(photos.map(photo => photo.albumId)).size;
  const fullInfromationArray = [];
  photos.forEach((photo) => {
    albums.forEach((album) => {
      if (photo.albumId === album.id) {
        fullInfromationArray.push(Object.assign(photo, album));
      }
    })
  });
  console.log(fullInfromationArray);

  function Photo(props) {
    return (
      <div className="main__photos-item">
        <img src={props.url} alt="color-box 150x150"/>
        <p onClick={openProfile}><i>Автор №{props.author}</i></p>
      </div>
    )
  }

  function Album(props) {
    return (
      <div className="main__profile-album">
        <img src="https://image.flaticon.com/icons/png/512/716/716784.png"/>
        <p>Альбом №{props.albumId}</p>
      </div>
    )
  }
  
  function Profile(props) {
    return (
      <div className={props.profileModificator}>
        <div className="main__profile-content">
          <div className="main__profile-header">
            <h1>Автор №{props.author}</h1>
            <CloseIcon onClick={closeProfile}/>
          </div>
          <hr></hr>
          <Typography className="main__profile-albums"> {
            albums.filter(album => album.userId === props.author)
                  .map(album => (<Album albumId={album.id}/>))
            }
          </Typography>
        </div>
      </div>
    )
  }


  return (
    <div className="main__page">
      <Typography className="main__photos"> {
        fullInfromationArray.filter(photo => photo.albumId === page)
              .map(
                  photo=> 
                  (
                    <Photo url={photo.thumbnailUrl} author={photo.userId} />
                  )
                )
        }
      </Typography>
      <Pagination count={numberOfPages} page={page} onChange={handleChange} 
                  variant="outlined" color="secondary" size="large" />
      <Profile profileModificator={profileModificator} author={1}/>
    </div>
  );  
}
  