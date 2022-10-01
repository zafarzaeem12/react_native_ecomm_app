/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, View,FlatList,ScrollView } from 'react-native';
import { NavBar , Text, Card } from 'galio-framework';
import CategoryShop from './CategoryShop'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ic from 'react-native-vector-icons/MaterialIcons';
const Shop = (props) => {
    const { route , navigation } = props
    return (
        <ScrollView>
              <NavBar
                transparent
                title="SHOP"
                left={<Icon name="hamburger" size={30} color="grey" onPress={() => navigation.toggleDrawer()} />}
                right={<Ic name="shopping-bag" size={40} color="silver" />}
                />
                <FlatList
                keyExtractor={(item) => item?.id}
                data={route.params.DATA}
                renderItem={
                ({ item }) => (
                <CategoryShop item={item} />
                )
            }
                />
        </ScrollView>
    )
}

export default Shop


const styles = StyleSheet.create({})
