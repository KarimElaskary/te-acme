import React from 'react'
import { Link } from 'react-router-dom'
import cell from '../assets/cell.jpg'
import maki from '../assets/maki.jpg'

const ServersList = () => {
  const servers = [
    {
      id: 1,
      name: 'Cell',
      icon: cell,
    },
    {
      id: 2,
      name: 'potato',
      icon: maki,
    },
  ]

  return (
    <div className='max-w-[72px] flex flex-col h-[100vh] gap-2 bg-[#0b1f31] rounded-sm '>
      <Link to='/direct-messages' className='server-icon'>
        <img src='/icon.png' alt='' className='icons' />
      </Link>
      <hr className='w-[50px] mx-auto border-[#6b7280]' />
      <div className='overflow-auto flex flex-col gap-3 '>
        {servers.map((server) => (
          <Link
            to={`/servers/${server.id}`}
            key={server.id}
            className='server-icon'
          >
            <img src={server.icon} alt={server.name} className='icons' />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ServersList
