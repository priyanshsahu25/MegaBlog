import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className='py-3 shadow '>
      <Container>
        <nav className='flex'>
          <div className='md:mr-4'>
            <Link to='/'>
              <Logo width='180px' height='10px'/>
              </Link>
          </div>
          <ul className='flex md:ml-auto lg:ml-auto ml-auto xs:ml-0 '>
            {navItems.map((item) => 
            item.active ? (
              <li className='sm:pl-2' key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                // className='inline-block px-6 py-2  duration-200 hover:bg-gray-100 rounded-full font-bold font-mono  text-lg sm:text-base  md:text-lg lg:text-xl'
                className='inline-bock sm:px-2 sm:py-4 sm:text-lg
                
                md:px-6 py-2 duration-200 hover:bg-gray-100 rounded-full font-bold font-mono md:text-lg 
                xs:text-sm xs:px-1
               
                lg:text-lg lg:px-6 lg:py-2'

                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li  className='inline-bock sm:px-2 sm:py-4 sm:text-lg
                
              md:px-6 py-2 duration-200 hover:bg-gray-100 rounded-full font-bold font-mono md:text-lg lg:text-lg lg:px-6 lg:py-2'>
                <LogoutBtn  />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header