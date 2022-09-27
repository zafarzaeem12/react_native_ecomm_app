/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet , TouchableOpacity} from 'react-native';
import {Image, Center, Button} from 'native-base';
import {Text} from 'react-native-paper';


const Welcome = () => {
  return (
    <Center style={styles.container}>
      <Image
        size={150}
        borderRadius={100}
        source={{
          uri: 'https://www.w3schools.com/css/img_lights.jpg',
        }}
        alt="Alternate Text"
      />
      <Text style={styles.stretch} variant="titleLarge">
        Welcome to AliBaba.com
      </Text>
      <Text style={styles.paragraph}>you may also buys and purchase only</Text>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.logintxt} >LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerBtn}>
        <Text style={styles.registertxt}>SIGNUP</Text> 
      </TouchableOpacity>
      
      
    </Center>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
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
    borderWidth:2,
    borderColor:"black"

  },
  registerBtn: {
    width: "80%",
    borderRadius: 25,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "white",
    borderWidth:2,
    borderColor:"black"
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
