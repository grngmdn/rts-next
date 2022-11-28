import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { db } from '../../database/firebase-config';
import {
  collection,
  getDocs,
  deleteDoc,
  addDoc,
  doc,
} from 'firebase/firestore/lite';

const ObituaryAdmin = () => {
  const [name, setName] = useState([]);
  const [newName, setNewName] = useState('');
  const [newHome, setNewHome] = useState('');
  const [newDob, setNewDob] = useState('');
  const [newDeath, setNewDeath] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [newMemberNo, setNewMemberNo] = useState('');
  const usersCollectionRef = collection(db, 'obituary');

  useEffect(() => {
    const newData = async () => {
      const res = await getDocs(usersCollectionRef);
      setName(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    newData();
  }, []);

  const addName = async () => {
    await addDoc(usersCollectionRef, {
      name: newName,
      home: newHome,
      dob: newDob,
      death: newDeath,
      memberNo: newMemberNo,
      url: newUrl,
    });
    window.location.reload(true);
  };

  const deleteName = async (id) => {
    const newDoc = doc(db, 'obituary', id);
    await deleteDoc(newDoc);
    window.location.reload(true);
  };

  return (
    <div>
      <h1>Obituary Admin</h1>
      <div>
        <input
          type='text'
          placeholder='Image URL'
          onChange={(event) => {
            setNewUrl(event.target.value);
          }}
        />
        <input
          type='text'
          placeholder='Name'
          onChange={(event) => {
            setNewName(event.target.value);
          }}
        />
        <input
          type='text'
          placeholder='Home Town'
          onChange={(event) => {
            setNewHome(event.target.value);
          }}
        />
        <input
          type='text'
          placeholder='Member Number'
          onChange={(event) => {
            setNewMemberNo(event.target.value);
          }}
        />
        <input
          type='text'
          placeholder='Date of Birth'
          onChange={(event) => {
            setNewDob(event.target.value);
          }}
        />
        <input
          type='text'
          placeholder='Date of death'
          onChange={(event) => {
            setNewDeath(event.target.value);
          }}
        />
        <button onClick={addName}>Add</button>
      </div>
      {name.map((people) => {
        return (
          <div key={people.id}>
            <img width='100px' src={people.url} />
            <p>{people.name}</p>
            <p>{people.home}</p>
            <p>{people.memberNo}</p>
            <p>{people.dob}</p>
            <p>{people.death}</p>
            <button
              onClick={() => {
                deleteName(people.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ObituaryAdmin;
