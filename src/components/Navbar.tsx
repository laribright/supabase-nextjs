'use client';

import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import AuthModalContext from '@/context/AuthModalContext';
import CreateProfileContext from '@/context/CreateProfileContext';
import { supabaseBrowserClient } from '@/utils/supabaseClient';
import { User } from '@supabase/supabase-js';

const Navbar = () => {
  const { toggleAuthModal } = useContext(AuthModalContext);
  const { toggleCreateProfileModal } = useContext(CreateProfileContext);

  const [user, setUser] = useState<User>();
  const [isMounted, setIsMounted] = useState(false);

  const handleSignout = async () => {
    const { error } = await supabaseBrowserClient.auth.signOut();
    if (!error) setUser(undefined);
  };

  useEffect(() => {
    const getCurrUser = async () => {
      const {
        data: { session },
      } = await supabaseBrowserClient.auth.getSession();

      if (session) {
        setUser(session.user);
      }
    };

    getCurrUser();
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <nav className='bg-white border-gray-200'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link
          href='/'
          className='flex items-center space-x-3 bg-blue-50 p-2 rounded-sm'
        >
          Home
        </Link>

        <div className='flex items-center space-x-5 w-auto'>
          {user && (
            <>
              <Link
                href='/profile'
                className='block text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700'
              >
                Profile
              </Link>

              <Button onClick={toggleCreateProfileModal} variant='outline'>
                Update Profile
              </Button>

              <Button onClick={handleSignout} variant='destructive'>
                Signout
              </Button>
            </>
          )}

          {!user && (
            <Button onClick={toggleAuthModal} variant='destructive'>
              Auth
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
