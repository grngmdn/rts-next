import React, { useEffect, useState } from 'react';
import { db } from '../../database/firebase-config';
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  addDoc,
} from 'firebase/firestore/lite';

const KeyMembers = () => {
  const [name, setName] = useState([]);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPosition, setNewPosition] = useState('');

  const collRef = collection(db, 'key_member');

  useEffect(() => {
    const newData = async () => {
      const res = await getDocs(collRef);
      setName(
        res.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        })
      );
    };

    newData();
  }, []);

  const addNewMember = async () => {
    await addDoc(collRef, {
      name: newName,
      email: newEmail,
      position: newPosition,
    });
    window.location.reload(true);
  };

  const deleteNewMember = async (id) => {
    const newId = doc(db, 'key_member', id);
    await deleteDoc(newId);
    window.location.reload(true);
  };

  return (
    <div>
      <div>
        <input
          type='text'
          placeholder='Member Name'
          onChange={(event) => {
            setNewName(event.target.value);
          }}
        />
        <input
          type='text'
          placeholder='Member Email'
          onChange={(event) => {
            setNewEmail(event.target.value);
          }}
        />
        <input
          type='text'
          placeholder='Member Position'
          onChange={(event) => {
            setNewPosition(event.target.value);
          }}
        />
        <button onClick={addNewMember}>Add Member</button>
      </div>
      <div>
        {name.map((people) => {
          return (
            <div key={people.id}>
              <p>{people.name}</p>
              <p>{people.email}</p>
              <p>{people.position}</p>
              <button
                onClick={() => {
                  deleteNewMember(people.id);
                }}
              >
                Delete Member
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KeyMembers;
