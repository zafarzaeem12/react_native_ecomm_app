/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, TouchableOpacity, TextInput, View ,ScrollView } from 'react-native';


import { Text, Appbar } from 'react-native-paper';

const Register = ({navigation}) => {
    return (
        <>
            <ScrollView style={styles.container} contentContainerStyle={{ alignItems:'center' }} >
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


                    <View style={{alignItems:"center"}}>
                        <TouchableOpacity style={styles.loginBtn}>
                            <Text style={styles.logintxt} >Register</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.textdesignation}>
                        <Text onPress={() => navigation.navigate('Login')} >Already have an account Login</Text>
                    </View>
                </View>
            </ScrollView>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        flexDirection: 'column',
        backgroundColor:"#FF7616"
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
        height: 45,
        width: 330,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#4267B2",
        
    },
    facebookBtn: {
        width: 100,
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
        borderColor: "black",
        
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
    },
    textdesignation:{
        justifyContent:"center",
        alignItems:"center",
        padding:20
    }
});

export default Register
