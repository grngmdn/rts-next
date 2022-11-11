import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../database/firebase-config';
import { v4 } from 'uuid';

const ImageConfig = () => {
  // stores the image taken from input tag before being uploaded to the firebase
  const [imageUpload, setImageUpload] = useState(null);
  // stores the uploaded images url
  const [imgUrl, setImgUrl] = useState([]);

  // reference to the image folder to use in useEffect
  const imgUrlRef = ref(storage, 'images/');

  // this gets the url from all the images in the firebase inside the images folder
  useEffect(() => {
    // listAll function is a built in firebase function to list all the images url
    listAll(imgUrlRef).then((res) => {
      // loop thru the list of url
      res.items.forEach((item) => {
        // gets the url
        getDownloadURL(item).then((url) => {
          // this adds the url to the state ImgUrl
          setImgUrl((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  // function to upload the image to firebase
  const uploadImage = () => {
    // check if the file has been selected inside the input
    if (imageUpload == null) {
      return;
    }

    // references the firebase folder to put the image into
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);

    // upload process in then initiated using uploadBytes
    // once the upload completes it returns a promise
    // This can used to alert or get image url to display in the browser.
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      // refreshes the page and shows the new added image in the browser
      getDownloadURL(snapshot.ref).then((url) => {
        return setImgUrl((prev) => [...prev, url]);
      });
      // alert is displayed once the image is uploaded
      alert('Image Uploaded');
    });
  };

  return (
    <>
      <div>
        <input
          type='file'
          onChange={(e) => {
            setImageUpload(e.target.files[0]);
          }}
        />
        <button onClick={uploadImage}>Upload Image</button>
      </div>
      <div>
        {imgUrl.map((url, id) => (
          <div key={id}>
            <img width='100px' alt={url.name} src={url} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageConfig;
