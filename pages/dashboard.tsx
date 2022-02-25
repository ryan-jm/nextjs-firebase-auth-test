/* eslint-disable @next/next/no-img-element */
import { getDownloadURL } from 'firebase/storage';

import File from '../components/File';
import { storageRef } from '../firebase/clientApp';

export default function Dashboard() {
  function download() {
    getDownloadURL(storageRef)
      .then((url) => {
        const img = document.getElementById('image');
        img.setAttribute('src', url);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <h1>
      Dash Board
      <br />
      <File />
      <button id="but" onClick={() => download()}>
        Download
      </button>
      <img src="" id="image" />
      <br />
    </h1>
  );
}
