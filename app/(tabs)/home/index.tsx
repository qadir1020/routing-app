import React from 'react'
import { Link } from 'expo-router'
import { View, Text, Button } from 'react-native';


const HomePage = () => {

  
 
  return (
    <View>
      <Link href="/home/settings">Push Settings</Link>
      <Text>Welcome to the Home Screen!</Text>
      {/* <Button title="Logout" onPress={handleLogout} /> */}
    </View>
  )
}

export default HomePage