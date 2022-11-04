import React, { useEffect, useState } from 'react';
import { db } from '../../database/firebase-config';
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  addDoc,
} from 'firebase/firestore/lite';

const ExecutiveMembers = () => {
  const collRef = collection(db, 'executive_member');
  const [name, setName] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPosition, setNewPosition] = useState('');

  useEffect(() => {
    const newData = async () => {
      const res = await getDocs(collRef);
      setName(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    newData();
  }, []);

  const addMember = async () => {
    await addDoc(collRef, { name: newName, position: newPosition });
    window.location.reload(true);
  };

  const deleteMember = async (id) => {
    const newId = doc(db, 'executive_member', id);
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
          placeholder='Position'
          onChange={(event) => {
            setNewPosition(event.target.value);
          }}
        />
        <button onClick={addMember}>Add Member</button>
      </div>
      <div>
        {name.map((people) => {
          return (
            <div key={people.id}>
              <p>{people.name}</p>
              <p>{people.position}</p>
              <button
                onClick={() => {
                  deleteMember(people.id);
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

export default ExecutiveMembers;
