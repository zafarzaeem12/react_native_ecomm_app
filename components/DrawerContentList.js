/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'
import { DrawerContentScrollView , DrawerItemList } from '@react-navigation/drawer';
const DrawerContentList = (props) => {
    const { data } = props
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={{flex:1,flexDirection:"column",alignItems:"center",paddingBottom:20}}>
                    <Image style={{width:80,height:80,borderRadius:40}}  source={{uri : data.avatar}}/>
                    <Text >{data.name}</Text>
                </View>
                <DrawerItemList  {...props} />
            </DrawerContentScrollView>
        </View>
    )
}

export default DrawerContentList

const styles = StyleSheet.create({})
