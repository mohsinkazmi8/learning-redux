import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from '../store/slices/UserSlice';

const DisplayUsers = () => {
  const dispatch = useDispatch()
    const data = useSelector((state) => state.user );

  const deleteUser = (id) => {
    console.log('remove');
    dispatch(removeUser(id));
  };

    // const user = useSelector((state) => state.user)
    console.log(data);
  return (
    <>
      {
        data.map((user, id) => {

          return <li className='user-list' key={id}>
            {user}
            <button className='btn-delete' onClick={() => deleteUser(id)}>
              <MdDeleteForever className='delete-icon' />
            </button>
          </li>;

        })
      }
    </>
  )
}

export default DisplayUsers
