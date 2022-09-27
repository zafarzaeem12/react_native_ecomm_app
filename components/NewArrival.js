/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'

const NewArrival = (props) => {
    const { item } = props
    const [data, Setdata] = useState({});
    useEffect(() => {
        const Dataas = () => {
            Setdata(item)
        }
        Dataas()
    }, [item])

    console.log(data)

    return (
        <>
            
            <View style={styles.container}>
                <View style={styles.boxes} >
                    <View style={styles.inner} >
                        <Image  source={{uri : data.img }}  style={[styles.backgroundimages,styles.boxes,styles.inner,styles.space ]}  />
                    </View>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 19,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        borderRadius: 30
    },
    boxes: {
        width: 250,
        height: 350,
        padding: 14
    },
    inner: {
        flex: 1,
        backgroundColor: '#eeee',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35
    },
    backgroundimages: {
        textAlign: "center",
        alignItems: "center"
    },
    categorytext: {
        fontWeight: 'bold',
        color: 'white'
    },
    space:{
        padding:35
    }

})

export default NewArrival
