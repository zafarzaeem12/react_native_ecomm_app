/* eslint-disable prettier/prettier */

import React,{useState} from 'react';
import { NavBar, View, Text, Card } from 'galio-framework';
import { FlatList, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ic from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import Category from './Category';
import NewArrival from './NewArrival';
import IsFeatured from './IsFeatured';
import Products from './Products';
const Home = () => {
 

  const DATA = [
    {
      id: '1',
      title: 'Clothings',
      img: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      newarrival: "new",
      isFeatured: true
    },
    {
      id: '2',
      title: 'Accessoies',
      img: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      isFeatured: true
    },
    {
      id: '3',
      title: 'Skin',
      img: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      newarrival: "new",
      isFeatured: true
    },
    {
      id: '4',
      title: 'Watches',
      img: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      isFeatured: true
    },
    {
      id: '5',
      title: 'Bags',
      img: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
      newarrival: "new",
      isFeatured: true
    },
    {
      id: '6',
      title: 'Dresses',
      img: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
      isFeatured: false
    },
    {
      id: '7',
      title: 'Bags',
      img: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
      newarrival: "new",
      isFeatured: false
    },
    {
      id: '8',
      title: 'Dresses',
      img: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
      isFeatured: false
    },
    {
      id: '9',
      title: 'Dresses',
      img: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
      newarrival: "new",
      isFeatured: false
    },
    {
      id: '10',
      title: 'Dresses',
      img: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
      isFeatured: false
    },
  ];



  return (
    <>
      <ScrollView>
        <NavBar
          transparent
          title="Alibaba.com"
          left={<Icon name="hamburger" size={30} color="grey" />}
          right={<Ic name="shopping-bag" size={40} color="silver" />}
        />
        {/* Categories flatlist start here */}
        <FlatList
          keyExtractor={(item) => item?.id}
          data={DATA}
          horizontal
          renderItem={
            ({ item }) => (
              <Category item={item} />
            )
          }
        />
        {/* Categories flatlist end here */}

        {/* Product flatlist start here */}
        <FlatList
          keyExtractor={(item) => item.id}
          numColumns={2}
          data={DATA}
          renderItem={({ item }) => (
            <Products item={item} />
          )}
        />
        {/* Product flatlist end here */}

        {/* New Arrival flatlist start here */}
        <FlatList
          keyExtractor={(item) => item?.id}
          data={DATA}
          horizontal
          renderItem={
            ({ item }) => {
              if (item.newarrival === "new") {
                return (
                  <>
                    <NewArrival item={item} />
                  </>
                )
              } else {
                <View><Text>No New Arrivals</Text></View>
              }
            }

          }
        />
        {/* New Arrival flatlist end here */}

        {/* Product flatlist start here */}
        <FlatList
          keyExtractor={(item) => item.id}
          numColumns={2}
          data={DATA}
          renderItem={({ item }) => (
            <Products item={item} />
          )}
        />
        {/* Product flatlist end here */}

        {/* isFeatured flatlist start here */}
        <FlatList
          keyExtractor={(item) => item.id}
          data={DATA}
          horizontal
          renderItem={({ item }) => {
            if (item.isFeatured) {
              return (
                <>
                  <IsFeatured item={item} />
                </>
              )
            } else {
              <View><Text>No New Arrivals</Text></View>
            }
          }}

        />
        {/* isFeatured flatlist end here */}


        {/* Product flatlist start here */}
        <FlatList
          keyExtractor={(item) => item.id}
          numColumns={2}
          data={DATA}
          renderItem={({ item }) => (
            <Products item={item} />
          )}
        />
        {/* Product flatlist end here */}


      </ScrollView>
     
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%'

  },
  cardImageRadius: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    paddingTop: 50,
  },
  text: {
    paddingTop: 40,
    fontSize: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  stretch: {
    paddingLeft: 20,
    paddingTop: 10
  },
  paragraph: {
    paddingTop: 35,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "black",
    borderWidth: 2,
    borderColor: "black"

  },
  facebookBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#4267B2",

  },
  registerBtn: {
    width: "80%",
    borderRadius: 25,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "black"
  },
  logintxt: {
    color: "white",
    fontSize: 17
  },
  registertxt: {
    color: "black",
    fontSize: 17
  },
  textInput: {
    justifyContent: "center",
    alignItems: "stretch",
    height: 45,
    width: 330,
    borderRadius: 100,
    borderColor: "black",
    paddingBottom: 10,
    paddingLeft: 15,
    borderWidth: 2
  }
});

export default Home
