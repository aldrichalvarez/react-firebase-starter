// import { useState } from 'react';
import '../App.css'
import { useAuth } from '../contexts/AuthContext';
import { setID, setUserData } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, getUserID } from "../firebase";


function Home() {
  const dispatch = useDispatch();
  const { currentUser, 
    // logout 
  } = useAuth()
  // const [loading, setLoading] = useState(false);


  // const savedItems = useSelector(state => state.savedItems)
  const id = useSelector(state => state.userID)
  // const userData = useSelector(state => state.userData)


  getUserID(currentUser.email).then((userID) => {
    dispatch(setID(userID))
  })

  getUserData(id).then((userData) => {
    dispatch(setUserData(userData))
  })


  // const handleLogout = () => {
  //   setLoading(true)
  //   logout()
  //   setLoading(false)
  // }


  return (
    <>
    </>
  );
}

export default Home;
