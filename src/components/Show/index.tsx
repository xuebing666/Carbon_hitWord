import './index.css'
import { Outlet } from 'react-router-dom'

export default function Show() {

  return (
    <div className='show'>
      <Outlet/>
    </div>
  )
}
