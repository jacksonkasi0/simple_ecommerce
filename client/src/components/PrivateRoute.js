import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleUser } from '../store/action/user';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  const user = useSelector((state) => state.auth.user);
  const [isToken, setIsToken] = useState(false);

  const dispatch = useDispatch();

  console.log(user);

  useEffect(() => {
    if (!user) {
      let token = localStorage.getItem('token');
      console.log(token);
      if (token) {
        dispatch(handleUser(token));
      }
    }
    setTimeout(() => {
      setIsToken(true);
    }, 2000);
  }, []);

  if (isToken) {
    return user ? <Outlet /> : <Navigate to='/login' />;
  }

  return (
    <div>
      <h1>Loading....</h1>
    </div>
  );
};

export default PrivateRoute;
