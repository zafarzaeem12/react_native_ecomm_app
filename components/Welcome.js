/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet , TouchableOpacity , Image ,View ,ScrollView ,ImageBackground} from 'react-native';
import {Text} from 'react-native-paper';


const   Welcome = ({navigation}) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ alignItems:'center' }} >
        <Image
          borderRadius={100}
          source={{
            uri: 'https://sp-ao.shortpixel.ai/client/q_glossy,ret_img/https://jingdaily.com/wp-content/uploads/2021/03/alibaba-monopoly-bust-1240x697.jpg',
          }}
        style={{height:150,width:150}}
          alt="Alternate Text"
        />
        <Text style={styles.stretch} variant="titleLarge">
          Welcome to AliBaba.com
        </Text>
        <Text style={styles.paragraph}>you may also buys and purchase only</Text>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.logintxt} onPress={() => navigation.navigate('Login')} >LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerBtn}>
          <Text style={styles.registertxt} onPress={() => navigation.navigate('Register')} >SIGNUP</Text> 
        </TouchableOpacity>
    
      
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex:1,
    flexDirection:'column',
   backgroundColor:"#FF7616"
  },
  stretch: {
    paddingTop: 100,
    fontSize: 30,
  },
  paragraph: {
    paddingTop: 35,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "black",

  },
  registerBtn: {
    width: "80%",
    borderRadius: 25,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "white",
    
  },
  logintxt:{
    color:"white",
    fontSize: 17
  },
  registertxt:{
    color:"black",
    fontSize: 17
  }
});
export default Welcome;
