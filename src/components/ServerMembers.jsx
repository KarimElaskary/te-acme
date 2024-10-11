import cell from '../assets/cell.jpg'
import maki from '../assets/maki.jpg'

const ServerMembers = () => {
  return (
    <div className='lg:flex flex-col hidden flex-1 overflow-auto'>
      <div className='flex flex-col pt-5 pl-5 gap-2'>
        <h1>Perfect Cell - x</h1>
        <div className='flex gap-3 items-center'>
          <img src={maki} alt='' className='icon-chat' />
          <p>3SKR</p>
        </div>
        <div className='flex gap-3 items-center'>
          <img src={cell} alt='' className='icon-chat' />
          <p>Cell</p>
        </div>
      </div>
    </div>
  )
}

export default ServerMembers
