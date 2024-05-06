import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className='bg-slate-200'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'><h1 className='font-bold'>Auth App</h1></Link>
        <ul className='flex gap-4 '>
          <Link to='/'><l1>Home</l1></Link>
          <Link to='/about'><l1>About</l1></Link>
          <Link to='/sign-in'><l1>Sign In</l1></Link>
          
          
          
        </ul>
      </div>
    </div>
  )
}
