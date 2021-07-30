import './App.css';
import React, { useEffect, useState} from 'react';

class Photo extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img src={this.props?.url} alt="image 150x150"/>
        <p>{this.props.albumId}</p>
        <a href="">link</a>
      </div>
    );
  }
}

function App() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      /* .then(json => setState({url: json[0]["thumbnailUrl"]})) */
      .then(json => setPhotos(json));
  }, []);
  console.log(photos);
  return photos.map((photo) => (
    <Photo url={photo.thumbnailUrl} albumId={photo.albumId} />
  ));
}

export default App;
