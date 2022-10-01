/* eslint-disable prettier/prettier */
import React from 'react'
import { NavBar, View, Text, Card, Input } from 'galio-framework';
import { FlatList, StyleSheet, Image, ImageBackground, ScrollView, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ic from 'react-native-vector-icons/MaterialIcons';
import Products from './Products';
import ProductFlatlist from './ProductFlatlist';

const Search = (props) => {

    const { route, navigation } = props

    return (
        <ScrollView>
            <NavBar
                transparent
                left={
                    <>
                        <Icon name="hamburger" size={30} color="grey" onPress={() => navigation.toggleDrawer()} />
                        <Input type='text' rounded borderless placeholder='Search' />
                    </>

                }
                leftStyle={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
                right={<Ic name="shopping-bag" size={40} color="silver" />}
                rightStyle={{ alignItems: "flex-end" }}
            />


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

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    ontake: {
        display: "flex",
        flexDirection: "row"
    }
})

export default Search

