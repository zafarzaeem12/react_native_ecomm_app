/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ArrivalListFlatlist = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.flatlist}>New Arrivals Collection</Text>
        </View>
    )
}

export default ArrivalListFlatlist

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
