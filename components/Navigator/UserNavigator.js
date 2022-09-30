/* eslint-disable prettier/prettier */
import React from 'react';
import Home from '../Home';
import Shop from '../Shop';
import Search from '../Shop';
import Profile from '../Profile';
import Bag from '../Bag';
import Wishlist from '../Wishlist';
import Orders from '../Orders';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Welcome from '../Welcome';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

const UserNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={Home} options={{ headerShown: false, drawerIcon: ({ }) => (<Icon name="home" size={30} color="black" />) }} />
            <Drawer.Screen name='Shop' component={Shop} options={{ headerShown: false, drawerIcon: ({ }) => (<Entypo name="shop" size={30} color="black" />) }} />
            <Drawer.Screen name='Search' component={Search} options={{ headerShown: false, drawerIcon: ({ }) => (<Icon name="search" size={30} color="black" />) }} />
            <Drawer.Screen name='Profile' component={Profile} options={{ headerShown: false, drawerIcon: ({ }) => (<AntDesign name="profile" size={30} color="black" />) }} />
            <Drawer.Screen name='Bag' component={Bag} options={{ headerShown: false, drawerIcon: ({ }) => (<Entypo name="shopping-bag" size={30} color="black" />) }} />
            <Drawer.Screen name='Wishlist' component={Wishlist} options={{ headerShown: false, drawerIcon: ({ }) => (<AntDesign name="heart" size={30} color="black" />) }} />
            <Drawer.Screen name='Orders' component={Orders} options={{ headerShown: false, drawerIcon: ({ }) => (<MaterialCommunityIcons name="truck-delivery" size={30} color="black" />) }} />
            <Drawer.Screen name='Logout' component={Welcome} options={{ headerShown: false, drawerIcon: ({ }) => (<AntDesign name="logout" size={30} color="black" />) }} />
        </Drawer.Navigator>
    )
}

export default UserNavigator;