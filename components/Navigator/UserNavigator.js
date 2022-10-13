/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet , TouchableOpacity , Image ,View ,ScrollView ,ImageBackground} from 'react-native';
import Home from '../Home';
import Shop from '../Shop';
import Search from '../Search';
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
import DrawerContentList from '../DrawerContentList';
const Drawer = createDrawerNavigator();

const UserNavigator = ({navigation ,data}) => {

    const DATA = [
        {
          id: '1',
          title: 'Clothings',
          img: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
          newarrival: "new",
          isFeatured: true,
          Price:200
        },
        {
          id: '2',
          title: 'Accessoies',
          img: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
          isFeatured: true,
          Price:201
        },
        {
          id: '3',
          title: 'Skin',
          img: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
          newarrival: "new",
          isFeatured: true,
          Price:209
        },
        {
          id: '4',
          title: 'Watches',
          img: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
          isFeatured: true,
          Price:198
        },
        {
          id: '5',
          title: 'Bags',
          img: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
          newarrival: "new",
          isFeatured: true,
          Price:227
        },
        {
          id: '6',
          title: 'Dresses',
          img: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
          isFeatured: false,
          Price:208
        },
        {
          id: '7',
          title: 'Bags',
          img: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
          newarrival: "new",
          isFeatured: false,
          Price:100
        },
        {
          id: '8',
          title: 'Kids',
          img: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
          isFeatured: false,
          Price:108
        },
        {
          id: '9',
          title: 'Male',
          img: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
          newarrival: "new",
          isFeatured: false,
          Price:98
        },
        {
          id: '10',
          title: 'Female',
          img: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
          isFeatured: false,
          Price:298
        },
      ];
    

    return (
        <View style={{flex:1}}>
            <Drawer.Navigator 
            drawerContent={(props) => <DrawerContentList {...props} data={data} /> }
            screenOptions={{
            drawerStyle: {
                backgroundColor: '#FF7616',
                paddingTop:50,
                width: 240
            }
            }}
            >
                <Drawer.Screen  name='Home' component={Home} initialParams={{DATA:DATA}}  options={{ headerShown: false, drawerIcon: ({ }) => (<Icon name="home" size={30} color="white" onPress={() => navigation.navigate('Home') } />) }} />
                <Drawer.Screen name='Shop' component={Shop} initialParams={{DATA:DATA}} options={{ headerShown: false, drawerIcon: ({ }) => (<Entypo name="shop" size={30} color="white" onPress={() => navigation.navigate('Shop') } />) }} />
                <Drawer.Screen name='Search' component={Search} initialParams={{DATA:DATA}} options={{ headerShown: false, drawerIcon: ({ }) => (<Icon name="search" size={30} color="white" onPress={() => navigation.navigate('Search') } />) }} />
                <Drawer.Screen name='Profile' component={Profile} initialParams={{data:data}} options={{ headerShown: false, drawerIcon: ({ }) => (<AntDesign name="profile" size={30} color="white" onPress={() => navigation.navigate('Profile') } />) }} />
                <Drawer.Screen name='Bag' component={Bag} options={{ headerShown: false, drawerIcon: ({ }) => (<Entypo name="shopping-bag" size={30} color="white" onPress={() => navigation.navigate('Bag') } />) }} />
                <Drawer.Screen name='Wishlist' component={Wishlist} options={{ headerShown: false, drawerIcon: ({ }) => (<AntDesign name="heart" size={30} color="white" onPress={() => navigation.navigate('Wishlist') } />) }} />
                <Drawer.Screen name='Orders' component={Orders} options={{ headerShown: false, drawerIcon: ({ }) => (<MaterialCommunityIcons name="truck-delivery" size={30} color="white" onPress={() => navigation.navigate('Orders') } />) }} />
                <Drawer.Screen name='Logout' component={Welcome} options={{ headerShown: false, drawerIcon: ({ }) => (<AntDesign name="logout" size={30} color="white" onPress={() => navigation.navigate('Logout') } />) }} />
            </Drawer.Navigator>
        </View>
    )
}

export default UserNavigator;