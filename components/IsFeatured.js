/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View ,Image } from 'react-native'
import React,{useEffect,useState} from 'react'

const IsFeatured = (props) => {
    const { item } = props
    const [data, Setdata] = useState({});
    useEffect(() => {
        const Dataas = () => {
            Setdata(item)
        }
        Dataas()
    }, [item])
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

export default IsFeatured

const styles = StyleSheet.create({
    container: {
        padding: 40,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        borderRadius: 10
    },
    boxes: {
        width: 100,
        height: 250,
        padding: 4
    },
    inner: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
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