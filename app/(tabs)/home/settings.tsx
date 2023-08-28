import { View, Text,Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../store';
import { logout } from '../../../authSlice';



const settings = () => {
  return (
    <View>
      <Text> settings</Text>
      {/* <Button title="Sign In" onPress={handleSignIn} /> */}
    </View>
  )
}

export default settings