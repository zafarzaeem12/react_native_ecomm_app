/* eslint-disable prettier/prettier */
import React from 'react';
import Welcome from '../Welcome';
import Login from '../Login';
import Register from '../Register';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Home = createNativeStackNavigator();


const AuthNavigator = () => {
return(
    <Home.Navigator>
        <Home.Screen  name='Welcome' component={Welcome} options={{headerShown:false}} />
        <Home.Screen  name='Login' component={Login} options={{headerShown:false}}  />
        <Home.Screen  name='Register' component={Register} options={{headerShown:false}}  />
    </Home.Navigator>
)
}

export default AuthNavigator;