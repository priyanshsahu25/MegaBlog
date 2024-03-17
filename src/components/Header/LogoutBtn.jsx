import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'

import { useNavigate } from 'react-router-dom'

import {logout} from '../../store/authSlice'


function LogoutBtn() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const logoutHandler = () => {
      authService.logout().then(() => {
          dispatch(logout());
          navigate('/');
        
      })
  }
return (
  <button

  onClick={logoutHandler}
  >Logout</button>
)
}

export default LogoutBtn
