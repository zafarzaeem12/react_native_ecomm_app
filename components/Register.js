/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, TouchableOpacity, TextInput, View } from 'react-native';

import { Text, Appbar } from 'react-native-paper';

const Register = () => {
    return (
        <>
         
            <View style={styles.stretch}  >
                <Text style={styles.text} variant="titleSmall">
                    Create new account
                </Text>
            </View>
            <View style={styles.container}>

                <View style={{ padding: 10 }}>
                    <TextInput style={styles.textInput} placeholder={"Enter Name"} />
                </View>
                <View style={{ padding: 10 }}>
                    <TextInput style={styles.textInput} placeholder={"Enter Phone no"} />
                </View>
                <View style={{ padding: 10 }}>
                    <TextInput style={styles.textInput} placeholder={"Enter Email"} />
                </View>
                <View style={{ padding: 10 }}>
                    <TextInput style={styles.textInput} placeholder={"Enter Password"} />
                </View>



                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.logintxt} >Register</Text>
                </TouchableOpacity>


            </View>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex:1,
        flexDirection:'column',
        alignItems:'center'
    },
    text: {
        paddingTop: 40,
        fontSize: 30,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    stretch: {
        paddingLeft: 20,
        paddingTop: 10
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
        backgroundColor: "#4267B2",
        

    },
    facebookBtn: {
        width: "80%",
        borderRadius: 25,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#4267B2",
        borderWidth: 2,

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
        borderColor: "black",
        paddingBottom: 10,
        paddingLeft: 15,
        borderWidth: 2
    }
});

export default Register
