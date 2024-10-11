import React from 'react'
import Chat from '../components/Chat'
import FriendsList from '../components/FriendsList'
const DirectMessages = () => {
  return (
    <div className='flex flex-1'>
      <FriendsList />
      <Chat />
    </div>
  )
}

export default DirectMessages