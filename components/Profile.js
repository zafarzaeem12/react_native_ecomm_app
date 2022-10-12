/* eslint-disable prettier/prettier */
import React from 'react'
import { ListItem, Avatar ,Icon  } from '@rneui/themed';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, Text, View ,ScrollView ,Image } from 'react-native'
import { NavBar  } from 'galio-framework';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Button } from 'react-native-paper';
const Profile = (props) => {
    const { navigation , route } = props;

   
    const  headers = ['Account Details', 'Wishlist' , 'Order History' ,'Setting' , 'Contact US'];
    const pathstack = [ headers ];
    
    
    
    
    return (
        <ScrollView>
             <NavBar
                transparent
                title="Profile"
                left={<FontAwesome5 name="hamburger" size={30} color="grey" onPress={() => navigation.toggleDrawer()} />}
                right={<MaterialIcons name="shopping-bag" size={40} color="silver" />}
                />
                <View style={styles.container}>
                    <Image source={{uri : `${route?.params?.data?.avatar}`}}
                    style={styles.images}
                    />
                </View>
                <View style={styles.text}>
                <Text>{route?.params?.data?.name}</Text>
                </View>
                <ScrollView style={{paddingBottom:80}}>
                            {
                            pathstack?.flat([1])?.map((data , index) => (
                            <ListItem
                                key={index}
                                bottomDivider
                                Component={TouchableScale}
                                style={{padding:10}}
                                friction={90} //
                                tension={100} // These props are passed to the parent component (here TouchableScale)
                                activeScale={0.95} //
                                linearGradientProps={{
                                    colors: ['#FF9800', '#F44336'],
                                    start: { x: 1, y: 0 },
                                    end: { x: 0.2, y: 0 },
                                }}
                                ViewComponent={LinearGradient} // Only if no expo
                                >
                                <Icon name="g-translate" color='#00aced' />
                                
                                <ListItem.Content>
                                    <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>
                                        {data}
                                    </ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron color="white" size={40} />
                                </ListItem>
                            ))
                        }     
                </ScrollView>
                <View style={{paddingBottom:20,backgroundColor:"green"}}>
                      <Button>Logout</Button>  
                </View>
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
        fontSize:50,
        paddingBottom:50
    },
    card:{
        width:355,
        height:55
    }
})
