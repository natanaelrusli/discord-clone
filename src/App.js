import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Chat from './Chat';
import { selectUser, login, logout } from './features/userSlice';
import Sidebar from './Sidebar';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // Log user in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
        }))

      } else {
        // User Log Out
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <div className="app">
      {user ? (
        <>
          {/* Sidebar */}
          <Sidebar />
    
          {/* Chat */}
          <Chat />
        </>
      ): (
        <Login />
      )}
    </div>
  );
}

export default App;
