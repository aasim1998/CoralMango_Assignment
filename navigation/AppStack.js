// import React, {useContext, useEffect, useState} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import LoginScreen from '../screens/LoginScreen';
// import Homescreen from '../screens/HomeScreen';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import auth from '@react-native-firebase/auth';
// import {AuthContext} from './AuthProvider';

// const Stack = createNativeStackNavigator();

// const AppStack = () => {
//   const [user, setUser] = useContext(AuthContext);
//   const [initializing, setInitializing] = useState(true);

//   const onAuthStateChanged = user => {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   };
//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber;
//   }, []);

//   if (initializing) return null;
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Home" component={Homescreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppStack;

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Homescreen from '../screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Homescreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
