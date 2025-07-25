import { useEffect, useState } from "react";

function Album(){

const [album, setAlbum] = useState([]);

useEffect(() => {
  // Fetching album data from the API
    fetch('https://jsonplaceholder.typicode.com/albums')
  .then((response) => response.json())
  .then((json) => {
    console.log(json)
    setAlbum(json)
  });
}
, []);

  return (
    <div className="album">
        <h1>Album List</h1>
        <ul>
          {album.map((item) => (
            <li key={item.id}>
              {item.title} (User ID: {item.userId})
            </li>
          ))}
          </ul>
      
    </div>
  );
}

export default Album;