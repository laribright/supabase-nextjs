'use client';

import Link from 'next/link';
import { FC, useContext } from 'react';

import { User } from '@/types/app';
import AuthModalContext from '@/context/AuthModalContext';
import { Button } from './ui/button';

const UserCard: FC<{ userData: User | null }> = ({ userData }) => {
  const { toggleAuthModal } = useContext(AuthModalContext);

  return (
    <div className='w-full py-3 px-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow'>
      <div className='flex flex-col items-center pb-10'>
        <img
          className='w-24 h-24 mb-3 object-cover rounded-full shadow-lg'
          src={userData?.avatar_url}
          alt={userData?.full_name}
        />
        <h5 className='mb-1 text-xl font-medium text-gray-900'>
          {userData?.full_name}
        </h5>
        <p>{userData?.email}</p>
        <div className='flex mt-4 md:mt-6'>
          {!userData ? (
            <Button variant='destructive' onClick={toggleAuthModal}>
              AUTH
            </Button>
          ) : (
            <Link
              href='/profile'
              className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
            >
              Profile
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
