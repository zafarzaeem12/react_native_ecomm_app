/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, TouchableOpacity, TextInput, View ,ScrollView } from 'react-native';
import { Text, Appbar } from 'react-native-paper';

const Login = ({navigation}) => {
  return (
    <>
      <ScrollView style={styles.container}  contentContainerStyle={{ alignItems:'center' }} >
          <View style={styles.stretch}  >
            <Text style={styles.text} variant="titleSmall">
              Sign In
            </Text>
          </View>
          <View style={styles.container}>

            <View style={{ padding: 10 }}>
              <TextInput style={styles.textInput} placeholder={"Enter Email Or Password"} />
            </View>
            <View style={{ padding: 10 }}>
              <TextInput style={styles.textInput} placeholder={"Enter Password"} />
            </View>


            <View style={{alignItems:"center"}}> 
              <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.logintxt} onPress={() => navigation.navigate('Home')}  >LOGIN</Text>
              </TouchableOpacity>
              <Text style={{padding:10}} onPress={() => navigation.navigate("Register")}>Donot have a account Register User</Text>
            </View>

            <View>
              <Text style={styles.text}> OR </Text>
            </View>

            <View style={{alignItems:"center"}}>
              <TouchableOpacity style={styles.facebookBtn}>
                <Text style={styles.logintxt} >Facebook Login</Text>
              </TouchableOpacity>
            </View>

          </View>
      </ScrollView>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex:1,
    flexDirection:'column',
    backgroundColor:"#FF7616"
  },
  text: {
    paddingTop: 40,
    fontSize: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign:"center"
  },
  stretch: {
    paddingLeft: 20,
    paddingTop: 10
  },
  paragraph: {
    paddingTop: 35,
  },
  loginBtn: {
    textAlign:"center",
    height: 45,
    width: 330,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "black",
    borderWidth: 2,
    borderColor: "black"

  },
  facebookBtn: {
    height: 45,
        width: 330,
    borderRadius: 25,
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
    borderColor: "white",
    paddingBottom: 10,
    paddingLeft: 15,
    borderWidth: 2
  }
});

export default Login
