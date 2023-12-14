import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAllUsers } from '../store/slices/UserSlice'


const DeleteUser = () => {

  const dispatch = useDispatch()

  const ClearUsers = () => {
    dispatch(deleteAllUsers())
  }
  

  return (
    <>
      <button className='btn-clear-all' onClick={ClearUsers}>
        Delete user
      </button>
    </>
  )
}

export default DeleteUser
