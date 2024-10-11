import React from 'react'
import cell from '../assets/cell.jpg'
import maki from '../assets/maki.jpg'
import { Link } from 'react-router-dom'

const FriendsList = () => {

    const friends = [
        {
            id: 1,
            name: 'Cell',
            icon: cell,
        },
        {
            id: 2,
            name: '3SKR',
            icon: maki,
        },
    ]
  return (
    <div className='flex w-[240px] flex-col p-4 gap-2 overflow-y-auto'>
      <h1 className='text-2xl font-bold'>Friends</h1>
      <div className='flex flex-col gap-2'>
        {friends.map((friend) => (
          <Link to={`/direct-messages/${friend.id}`} className='flex items-center gap-2 hover:bg-[#374151] p-2 rounded-md cursor-pointer'>
            <img src={friend.icon} alt={friend.name} className='w-10 h-10 rounded-full' />
            <div className='flex flex-col'>
              <h1>{friend.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FriendsList