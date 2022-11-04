import React, { useEffect, useState } from 'react';
import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
} from 'firebase/firestore/lite';
import { db } from '../../database/firebase-config';

const OrdinaryMember = () => {
  const [name, setName] = useState([]);
  const [newName, setNewName] = useState('');
  const [newAppointment, setNewAppointment] = useState('');
  const [newMemberNo, setNewMemberNo] = useState(0);
  const newCollectionRef = collection(db, 'ordinary_member');

  useEffect(() => {
    const newData = async () => {
      const res = await getDocs(newCollectionRef);
      setName(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    newData();
  }, []);

  const addNewMember = async () => {
    await addDoc(newCollectionRef, {
      name: newName,
      appointment: newAppointment,
      member_no: newMemberNo,
    });
    window.location.reload(true);
  };

  const deleteNewMember = async (id) => {
    const newId = doc(db, 'ordinary_member', id);
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
          type='number'
          placeholder='Member Number'
          onChange={(event) => {
            setNewMemberNo(event.target.value);
          }}
        />
        <input
          type='text'
          placeholder='Appointment'
          onChange={(event) => {
            setNewAppointment(event.target.value);
          }}
        />
        <button onClick={addNewMember}>Add Member</button>
      </div>
      <div>
        {name.map((people) => {
          return (
            <div key={people.id}>
              <p>{people.name}</p>
              <p>{people.member_no}</p>
              <p>{people.appointment}</p>
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

export default OrdinaryMember;
