/* eslint-disable prettier/prettier */

import React, { useState , useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './components/Navigator/AuthNavigator';
import UserNavigator from './components/Navigator/UserNavigator';






const App = () => {
  const [selected, setSelected] = useState(1);
 
  const [user,Setuser] = useState(true);
  
  const data = {
    name: "Tariq masood",
    avatar:"https://yt3.ggpht.com/ytc/AMLnZu8dj7pRtdre1hUe4zVPLd8PAvI4fVe__jHZMkgBXg=s900-c-k-c0x00ffffff-no-rj"
  }  
  useEffect(() => {
      Setuser(user)
  },[])


  return (

    <NavigationContainer>
    {
      user 
      ?
      <UserNavigator data={data} />
      :
      <AuthNavigator />
    }
    </NavigationContainer>

  );
};

export default App;
