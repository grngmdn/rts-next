import React, { useEffect, useState } from 'react';
import { db } from '../../database/firebase-config';
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore/lite';

const LifeMembers = () => {
  const [members, setMembers] = useState([]);
  const [name, setName] = useState('');
  const [memberNo, setMemberNo] = useState(0);
  const [appointment, setAppointment] = useState('');
  const newCollectionRef = collection(db, 'life-members');

  useEffect(() => {
    const fetchMembers = async () => {
      const res = await getDocs(newCollectionRef);
      setMembers(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchMembers();
  }, []);

  const newMember = async () => {
    await addDoc(newCollectionRef, {
      name: name,
      member_no: memberNo,
      appointment: appointment,
    });
    window.location.reload(true);
  };

  const deleteMember = async (id) => {
    const newDoc = doc(db, 'life-members', id);
    await deleteDoc(newDoc);
    window.location.reload(true);
  };

  return (
    <div>
      <h1>RTS LIFE MEMBERS ADMIN</h1>
      {members.map((member) => {
        return (
          <div key={member.id}>
            <div>
              <input
                type='text'
                placeholder='Member Name'
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <input
                type='number'
                placeholder='Member number'
                onChange={(event) => {
                  setMemberNo(event.target.value);
                }}
              />
              <input
                type='text'
                placeholder='Member Appointment'
                onChange={(event) => {
                  setAppointment(event.target.value);
                }}
              />
              <button onClick={newMember}>Add Member</button>
            </div>
            <hr />
            <div>
              <p>{member.name}</p>
              <p>{member.member_no}</p>
              <p>{member.appointment}</p>
              <button
                onClick={() => {
                  deleteMember(member.id);
                }}
              >
                Delete Member
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LifeMembers;
