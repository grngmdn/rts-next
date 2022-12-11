import React from 'react';

const MemberCard = ({ name, position, email }) => {
  return (
    <div className='max-w-[280px]'>
      <div className='grid justify-center items-center pb-5'>
        <img
          className='rounded-[50%]'
          alt={name}
          src='http://readingtamusamajuk.com/img/rudra.jpg'
        />
      </div>
      <hr />
      <div className='p-2 text-center'>
        <h1 className='text-xl font-extrabold'>{name.toUpperCase()}</h1>
        <h1 className='text-red-500 text-sm font-bold pb-5'>
          {position && position.toUpperCase()}
        </h1>
        <h1 className='text-sm'>
          {email && (
            <p>
              <span className='font-bold'>Email: </span>
              {email}
            </p>
          )}
        </h1>
      </div>
    </div>
  );
};

export default MemberCard;
