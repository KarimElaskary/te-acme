import React from 'react'
import ServerChannels from '../components/ServerChannels'
import Chat from '../components/Chat'
import ServerMembers from '../components/ServerMembers'

const ServerView = () => {
  return (
    <div className='flex flex-1'>
      <ServerChannels />
      <Chat />
      <ServerMembers />
    </div>
  )
}

export default ServerView
