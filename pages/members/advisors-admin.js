import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { db } from '../../database/firebase-config';
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore/lite';

const Advisors = () => {
  const [name, setName] = useState([]);
  const [newname, setNewName] = useState('');

  const getCollectionRef = collection(db, 'advisors');

  useEffect(() => {
    const getName = async () => {
      const res = await getDocs(getCollectionRef);
      setName(
        res.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        })
      );
    };

    getName();
  }, []);

  const addName = async () => {
    await addDoc(getCollectionRef, { name: newname });
    window.location.reload(true);
  };

  const DeleteName = async (id) => {
    const newDoc = doc(db, 'advisors', id);
    await deleteDoc(newDoc);
    window.location.reload(true);
  };

  return (
    <div>
      <h1>RTS ADVISER MEMBERS ADMIN</h1>
      <div>
        <input
          type='text'
          placeholder='Advisor Name'
          onChange={(event) => {
            setNewName(event.target.value);
          }}
        />
        <button onClick={addName}>Add Advisor</button>
      </div>
      <Image height={200} width={200} alt='member' src='/profile.jpg' />
      {name.map((people) => {
        return (
          <div key={people.id}>
            <p>{people.name}</p>
            <button
              onClick={() => {
                DeleteName(people.id);
              }}
            >
              Delete Advisor
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Advisors;
