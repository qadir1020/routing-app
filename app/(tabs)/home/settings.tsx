import { View, Text, Button } from 'react-native'
import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../store';
import { login,logout } from '../../../authSlice';



const settings = () => {

  const isLoggedOut = useSelector((state: RootState) => state.auth.isLoggedOut);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch<AppDispatch>();


  const handleLogout = () => {
    dispatch(logout());
  };


  const handleLogin = () => {
    dispatch(login());
  };

  useEffect(() => {

  },[])

  return (
    <View>
      <Text> settings</Text>
      {!isLoggedIn && <Button title="Sign In" onPress={handleLogin} />}
      {!isLoggedOut && <Button title="Sign Out" onPress={handleLogout} />}
    </View>
  )
}

export default settings