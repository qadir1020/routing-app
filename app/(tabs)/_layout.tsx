import { Tabs } from 'expo-router'
import React from 'react'

export default () => {
    return (
        <Tabs>
            <Tabs.Screen name="home" options={{ headerShown: false }} />
            <Tabs.Screen name="list" />
        </Tabs>
    );
}