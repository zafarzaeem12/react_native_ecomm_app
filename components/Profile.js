/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View ,ScrollView ,Image } from 'react-native'
import { NavBar , Card ,Block ,Icon  ,Accordion  } from 'galio-framework';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Profile = (props) => {
    const { navigation , route } = props;

    const pathstack = {
        header : ['Account Details', 'Wishlist' , 'Order History' ,'Setting' , 'Contact US'],
         icon : ['pin-3' ,'pin-4' , 'pin-5' , 'pin-6' ,'pin-8']
    }
    console.log(pathstack)
    return (
        <ScrollView>
             <NavBar
                transparent
                title="Profile"
                left={<FontAwesome5 name="hamburger" size={30} color="grey" onPress={() => navigation.toggleDrawer()} />}
                right={<MaterialIcons name="shopping-bag" size={40} color="silver" />}
                />
                <View style={styles.container}>
                    <Image source={{uri : `${route.params.data.avatar}`}}
                    style={styles.images}
                    />
                </View>
                <View style={styles.text}>
                <Text>{route.params.data.name}</Text>
                </View>
                <Block center>
                    <Accordion 
                    
                        />
                </Block>
        </ScrollView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center"
    },
    images:{
        width:200,
        height:200,
        borderRadius:100
    },
    text:{
        alignItems:"center",
        justifyContent:"space-between",
        paddingTop: 20,
        fontSize:30
    }
})
