/* eslint-disable prettier/prettier */

import React, { useState , useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './components/Navigator/AuthNavigator';
import UserNavigator from './components/Navigator/UserNavigator';






const App = () => {
  const [selected, setSelected] = useState(1);
 
  const [user,Setuser] = useState(true);
  
  useEffect(() => {
      Setuser(user)
  },[])


  return (

    <NavigationContainer>
    {
      user
      ?
      <UserNavigator />
      :
      <AuthNavigator />
    }
    </NavigationContainer>

  );
};

export default App;
