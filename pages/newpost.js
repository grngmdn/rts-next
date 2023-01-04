import React, { useEffect, useState } from 'react';
import { HiArrowSmRight } from 'react-icons/hi';
import { db, storage } from '../database/firebase-config';
import {
  collection,
  getDocs,
  deleteDoc,
  addDoc,
  doc,
} from 'firebase/firestore/lite';
import { useRouter } from 'next/router';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

const Newpost = () => {
  const usersCollectionRef = collection(db, 'newpost');
  const [name, setName] = useState([]);
  const [aurtherName, setAurtherName] = useState('');
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [uploadImg, setUploadImg] = useState(null);
  const [date, setDate] = useState(new Date().toDateString());
  const router = useRouter();

  // fetches the data on first load
  useEffect(() => {
    const newData = async () => {
      const res = await getDocs(usersCollectionRef);
      setName(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    newData();
  }, []);

  // adds a new card to database
  const addName = async () => {
    await addDoc(usersCollectionRef, {
      title: title,
      url: imgUrl,
      name: aurtherName,
      link: link,
      date: date,
    });
  };

  // uploads the image to firebase
  const uploadImage = () => {
    if (uploadImg == null) return;
    const imgRef = ref(
      storage,
      `home_page/article_img/${uploadImg.name + v4()}`
    );
    uploadBytes(imgRef, uploadImg).then(() => {
      console.log('img uploaded');
    });
    // window.location.reload(true);
  };

  // runs the addName and uploadImage fn when called
  const runTwoFunction = async (e) => {
    e.preventDefault();

    // reloads the page to display the updated data
    setTimeout(() => {
      window.location.reload(true);
    }, '100');

    uploadImage();
    addName();
  };

  // deletes a  card
  const deleteName = async (id) => {
    const newDoc = doc(db, 'newpost', id);
    await deleteDoc(newDoc);
    window.location.reload(true);
  };

  return (
    <div className='p-10'>
      {/* Inputs required for the article and article card */}
      <form onSubmit={runTwoFunction}>
        <div className='mb-10 flex flex-col gap-2'>
          <input
            type='file'
            onChange={(e) => {
              setUploadImg(e.target.files[0]);
            }}
          />
          <input
            className='border-2'
            placeholder='Title'
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            required
            className='border-2'
            placeholder='Image Url'
            onChange={(e) => {
              setImgUrl(e.target.value);
            }}
          />
          <input
            required
            className='border-2'
            placeholder='Writer Name'
            onChange={(e) => {
              setAurtherName(e.target.value);
            }}
          />
          <input
            required
            className='border-2'
            placeholder='Blog link'
            onChange={(e) => {
              setLink(e.target.value);
            }}
          />
        </div>
        <div className='mb-10 flex flex-col gap-2'>
          <textarea
            required
            className='border-2 h-80'
            placeholder='Article'
            onChange={(e) => {
              setLink(e.target.value);
            }}
          ></textarea>
          <button
            // onClick={addName}
            className='bg-blue-500 px-4 py-1 text-white font-medium hover:bg-blue-600 max-w-[150px] rounded flex justify-center items-center'
          >
            Create Post
          </button>
        </div>
      </form>

      {/* displays all the article cards  */}
      {name.map((people) => {
        return (
          <div className='border-[1px] rounded shadow mb-10' key={people.id}>
            <img src={people.url} width={500} alt='blog1' />
            <div className='p-5 flex flex-col gap-5'>
              <h1 className='text-3xl text-gray-800'>{people.title}</h1>
              <button
                onClick={() => {
                  router.push('/obituary');
                }}
                className='bg-blue-500 px-4 py-2 text-white font-medium hover:bg-blue-600 max-w-[150px] rounded flex justify-center items-center'
              >
                READ MORE &nbsp;
                <HiArrowSmRight className='inline' />
              </button>
              <button
                onClick={() => {
                  deleteName(people.id);
                }}
                className='bg-red-500 px-4 py-2 text-white font-medium hover:bg-red-600 max-w-[150px] rounded flex justify-center items-center'
              >
                Delete
              </button>
            </div>
            <div className='bg-gray-200 px-5 py-2'>
              <p className='text-gray-500 text-sm'>
                Posted on {people.date} by {people.name}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Newpost;
