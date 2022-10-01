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
import ProductFlatlist from './ProductFlatlist';
import ArrivalListFlatlist from './ArrivalListFlatlist';
import FeaturedFlatlist from './FeaturedFlatlist';
const Home = (props) => {
 
const {navigation ,route   } = props
 console.log("zaeem",route.params.DATA)



  return (
    <>
      <ScrollView>
        <NavBar
          transparent
          title="Alibaba.com"
          left={<Icon name="hamburger" size={30} color="grey" onPress={() => navigation.toggleDrawer()} />}
          right={<Ic name="shopping-bag" size={40} color="silver" />}
        />
        {/* Categories flatlist start here */}
        <FlatList
          keyExtractor={(item) => item?.id}
          data={route.params.DATA}
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
          data={route.params.DATA}
          ListHeaderComponent={ProductFlatlist}
          renderItem={({ item }) => (
            <Products item={item} />
          )}
        />
        {/* Product flatlist end here */}
        
   
            
       {ArrivalListFlatlist()}
        {/* New Arrival flatlist start here */}
        <FlatList
          keyExtractor={(item) => item?.id}
          data={route.params.DATA}
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
          data={route.params.DATA}
          renderItem={({ item }) => (
            <Products item={item} />
          )}
        />
        {/* Product flatlist end here */}

        {FeaturedFlatlist()}

        {/* isFeatured flatlist start here */}
        <FlatList
          keyExtractor={(item) => item.id}
          data={route.params.DATA}
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
          data={route.params.DATA}
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
    backgroundColor:"#A0CAFF"
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
