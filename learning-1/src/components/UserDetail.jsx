import React from 'react'
import DeleteUser from './DeleteUser';
import { FakeUserData } from '../api/Index';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/UserSlice';
import DisplayUsers from './DisplayUsers';


const UserDetail = () => {
  const dispatch = useDispatch();
  const AddNewUser = (paylode) => {
    console.log(paylode);
    dispatch(addUser(paylode));
  };
  return (
    <>
      <div className="content">
        <div className="admin-table">
            <div className="admin-subtitle">
                List of User Details
            </div>
            <button onClick={() => AddNewUser(FakeUserData())}>Add New User</button>
        </div>
        <ul>
           <DisplayUsers/>
        </ul>
        <hr />
        <DeleteUser/>
      </div>
    </>
  )
}

export default UserDetail
