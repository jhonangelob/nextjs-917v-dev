import { SyncLoader } from 'react-spinners'

export default function Loader() {
  return (
    <div className='flex justify-center items-center h-full min-h-[calc(100vh-64px)]'>
      <SyncLoader color='#36d7b7' />
    </div>
  )
}
