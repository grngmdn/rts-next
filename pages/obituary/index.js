import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { db } from '../../database/firebase-config';
import { collection, getDocs } from 'firebase/firestore/lite';

const Obituary = () => {
  const [name, setName] = useState([]);
  const newCollectionRef = collection(db, 'obituary');

  useEffect(() => {
    const newName = async () => {
      const res = await getDocs(newCollectionRef);
      setName(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    newName();
  }, []);

  return (
    <div>
      <h1>OBITUARY</h1>
      {name.map((people) => {
        return (
          <div key={people.id}>
            <img width='100px' src={people.url} />
            <p>{people.name}</p>
            <p>{people.home}</p>
            <p>{people.dob}</p>
            <p>{people.death}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Obituary;
