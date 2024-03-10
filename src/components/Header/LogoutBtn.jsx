import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'


import {logout} from '../../store/authSlice'


// function LogoutBtn() {

//   const [loggedin,setLoggedin]=useState(true);
//   const navigate = useNavigate()
//     const dispatch = useDispatch()
//     const logoutHandler = () => {
    
//         authService.logout().then(() => {
//           setLoggedin(false)
//             dispatch(logout())
//             // navigate("/")
            
         
//         })

//     }
//   return (
//     <>
//  <button   
//     onClick={logoutHandler}
//     >Logout</button>
    

      
//     </>
   
    
//   )
// }
function LogoutBtn() {
  const dispatch = useDispatch()
  const logoutHandler = () => {
      authService.logout().then(() => {
          dispatch(logout())
      })
  }
return (
  <button

  onClick={logoutHandler}
  >Logout</button>
)
}

export default LogoutBtn
