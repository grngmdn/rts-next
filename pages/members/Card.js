import Image from 'next/image';
import React from 'react';
import profile from '../../public/profile.jpg';

const Card = ({ name }) => {
  return (
    <div>
      <Image height={200} width={200} alt='member' src={profile} />
      {name.map((people) => {
        return (
          <div key={people.id}>
            <p>{people.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
