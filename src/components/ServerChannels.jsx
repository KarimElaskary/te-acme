import cell from '../assets/cell.jpg'
import right from '../assets/arrow-right.png'
import down from '../assets/arrow-down.png'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Category = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className='flex items-center gap-1 cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={isOpen ? down : right} alt='' className='small-icon' />
        <h1 className='font-semibold cursor-pointer select-none'>{title}</h1>
      </div>
      {isOpen && (
        <div className='flex flex-col gap-2 ml-3 cursor-pointer'>
          {children}
        </div>
      )}
    </>
  )
}

const ServerChannels = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }
  return (
    <div className='flex flex-col gap-2 w-[240px] '>
      <div className='flex gap-2 border-b-[1px] border-b-[#6b7280] sticky items-center justify-between'>
        <div className='flex flex-col'>
          <h1 className='text-[24px]'>Cell</h1>
          <p>members: x</p>
        </div>
        <img src={cell} alt='' className='icons' />
      </div>
      <div className='flex flex-col gap-3 flex-1 overflow-auto'>
        <Category title='General'>
          <p>room 1</p>
          <p>room 2</p>
          <p>room 3</p>
          <p>room 4</p>
        </Category>
        <Category title='Voice Channels'>
          <p>voice 1</p>
          <p>voice 2</p>
        </Category>
        <Category title='Text Channels'>
          <p>text 1</p>
          <p>text 2</p>
          <p>text 3</p>
        </Category>
        {/* ... add more categories as needed ... */}
      </div>
      <div className='flex items-center justify-between p-2 h-[48px] bg-[#0b1f31] gap-2'>
        <div className='flex items-center gap-2'>
          {' '}
          <img
            src={cell}
            alt=''
            className='w-[32px] h-[32px] object-cover rounded-[50%]'
          />
          <p>Tox_Emily</p>
        </div>

        <button
          onClick={handleLogout}
          className='self-end bg-red-500 text-white p-1 rounded'
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default ServerChannels
