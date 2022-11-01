import React, { useEffect, useState } from 'react';
import { db } from '../../database/firebase-config';
import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
} from 'firebase/firestore/lite';

const VideoAdmin = () => {
  const [video, setVideo] = useState([]);
  const [addName, setAddName] = useState('');
  const [addUrl, setAddUrl] = useState('');
  const usersCollectionRef = collection(db, 'videos');

  useEffect(() => {
    const getVideo = async () => {
      const res = await getDocs(usersCollectionRef);
      setVideo(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getVideo();
  }, []);

  const addVideo = async () => {
    await addDoc(usersCollectionRef, { name: addName, url: addUrl });
    window.location.reload(true);
  };

  const deleteVideo = async (id) => {
    const video = doc(db, 'videos', id);
    await deleteDoc(video);
    window.location.reload(true);
  };

  return (
    <div>
      <h1>Videos Admin</h1>
      <input
        type='text'
        placeholder='Video Name'
        onChange={(event) => {
          setAddName(event.target.value);
        }}
      />
      <input
        type='text'
        placeholder='Video Link'
        onChange={(event) => {
          setAddUrl(event.target.value);
        }}
      />
      <button onClick={addVideo}>Add</button>
      <hr />
      <div>
        {video.map((vid) => {
          return (
            <div key={vid.id}>
              <p>{vid.name}</p>
              <iframe
                width='560'
                height='315'
                src={vid.url}
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
              <br />
              <button
                onClick={() => {
                  deleteVideo(vid.id);
                }}
              >
                Delete Video
              </button>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoAdmin;
