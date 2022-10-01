/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View,ImageBackground } from 'react-native'



const CategoryShop = (props) => {
    const { item } = props
  
  return (
 
    <View style={styles.container}>
      <View style={styles.boxes}>
        <View style={styles.inner}  >
          <ImageBackground style={styles.backgroundimages} source={{uri: item.img}}>
              <View style={{flex:1,padding:10 , opacity:1}}>
                <Text style={styles.categorytext}>{item.title}</Text>
              </View>
            </ImageBackground>
        </View>
      </View>
    </View>
    
  )
}
const styles = StyleSheet.create({
  container:{
    padding:1,
    flexDirection:'row',
    flexWrap:'wrap',
    flex:1,
    borderRadius:30,
    alignItems:"center"
  },
  boxes:{
    width: 380,
    height:100,
    padding:4
  },
  inner:{
    flex:1,
    backgroundColor:"#99B2FF",
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15
  },
  backgroundimages:{
      textAlign:"center",
      alignItems:"center",
      opacity: 0.5
  },
  categorytext: {
    fontWeight: 'bold' ,
     color:'black',
    paddingTop:28
    }

})
export default CategoryShop

