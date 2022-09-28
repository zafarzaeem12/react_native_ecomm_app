/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ProductFlatlist = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.flatlist}>New Products Collection</Text>
        </View>
    )
}

export default ProductFlatlist

const styles = StyleSheet.create({
    container:{
        padding:20,
        flex:1,
       flexDirection:"column",
       alignItems:"center"
    },
    flatlist:{
        fontSize:20
    }
})
