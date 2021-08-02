import React, { useEffect, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import { Photo } from '../components/Photo';
import { Profile } from '../components/Profile';

export default function App() {
  const [albums, setAlbums] = useState([]);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    Promise.all([fetch('https://jsonplaceholder.typicode.com/photos'), fetch('https://jsonplaceholder.typicode.com/albums')])
      .then( async ([photosJson, albumsJson]) => {
        const photos = await photosJson.json();
        const albums = await albumsJson.json();
        const fullInfromationArray = [];

        photos.forEach((photo) => {
          albums.forEach((album) => {
            if (photo.albumId === album.id) {
              fullInfromationArray.push(Object.assign(photo, album));
            }
          });
        });
        setData(fullInfromationArray);
        setAlbums(albums);
      }).catch(() => console.log('Что-то пошло не так!')); 
  }, []);

  const handleChangePage = (_, page) => {
    setPage(page);
  };
  const openProfile = (userId) => {
    setSelectedUser(userId);
  };
  const closeProfile = () => {
    setSelectedUser(null);
  };

  const numberOfPages = new Set(data.map(photo => photo.albumId)).size;

  return (
    <div className="main__page">
      <Typography className="main__photos"> 
        {
          data
            .filter(photo => photo.albumId === page)
            .map(photo => (
              <Photo 
                key={photo.url} 
                url={photo.thumbnailUrl} 
                userId={photo.userId} 
                handleClick={openProfile} 
              />
            ))
        }
      </Typography>
      <Pagination 
        count={numberOfPages} 
        page={page} 
        onChange={handleChangePage} 
        variant="outlined" 
        color="secondary" 
        size="large" 
      />
      <Profile 
        profileVisible={!!selectedUser} 
        albums={albums}
        onCloseClick={closeProfile} 
        userId={selectedUser}
        data={data}
      />
    </div>
  );  
}
  