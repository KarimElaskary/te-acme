import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import ServersList from '../components/ServersList'


const Dashboard = () => {

  return (
    <div className='flex flex-1 max-h-screen'>
      <ServersList />
      <div className="flex flex-col flex-1">
        
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
