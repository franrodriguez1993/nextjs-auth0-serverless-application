'use client'

import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';

const ProfilePage = () => {
  const { user } = useUser();
  return (

      <div>
      <h1>Welcome {user?.nickname}</h1>
    </div>


  )
}

export default withPageAuthRequired(ProfilePage)