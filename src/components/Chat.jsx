import { useState } from 'react'
import cell from '../assets/cell.jpg'
import maki from '../assets/maki.jpg'

const Chat = () => {
  const [isTyping, setIsTyping] = useState(false)
  const [message, setMessage] = useState('')

  const handleMessage = (event) => {
    setMessage(event.target.value)
    setIsTyping(true)
  }

  const chatMessages = [
    { user: 'Cell', avatar: cell, text: 'hello how are you' },
    { user: '3SKR', avatar: maki, text: 'Fine, Thanks' },
  ]

  return (
    <div className='flex flex-1 flex-col p-5 bg-[#050f18]'>
      <div className='flex flex-col gap-[25px] mb-[15px] flex-1 overflow-auto overflow-x-hidden'>
        {chatMessages.map((msg, index) => (
          <div key={index} className='flex gap-2 lg:min-w-[1200px] md:max-w-[800px] '>
            <img
              src={msg.avatar}
              alt={`${msg.user}'s avatar`}
              className='icon-chat'
            />
            <div className='flex flex-col gap-1'>
              <h1 className='font-bold text-[18px]'>{msg.user}</h1>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col'>
        <input
          type='text'
          placeholder='Message x'
          className='p-[20px] rounded-[5px] bg-gray-500 text-black outline-none placeholder:text-black font-semibold'
          value={message}
          onChange={handleMessage}
        />
        <div className='h-[24px]'>
          {message && (
            <p>
              <span className='font-bold'>Cell</span> is typing...
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Chat
