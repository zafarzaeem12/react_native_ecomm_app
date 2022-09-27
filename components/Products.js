/* eslint-disable prettier/prettier */
import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View ,Image } from 'react-native'

const Products = (props) => {
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

export default Products

const styles = StyleSheet.create({

    container: {
        padding: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        borderRadius: 15,
        paddingLeft:25
    },
    boxes: {
        width: 150,
        height: 250,
        padding: 15,
        
    },
    inner: {
        flex: 1,
        backgroundColor: '#eeee',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
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
