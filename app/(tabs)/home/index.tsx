import React from 'react'
import { Link } from 'expo-router'
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../store';
import { logout } from '../../../authSlice';
import { View, Text, Button } from 'react-native';


const HomePage = () => {

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View>
      <Link href="/home/settings">Push Settings</Link>
      <Text>Welcome to the Home Screen!</Text>
      {isLoggedIn && <Button title="Logout" onPress={handleLogout} />}
    </View>
  )
}

export default HomePage