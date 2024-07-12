import React, { useContext } from 'react';
import { View, Text, Image, Button,SafeAreaView, StyleSheet,TouchableOpacity } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import { CartContext } from '../cartContext';

export default function ProductDetailScreen({ route,navigation }) {
  const { product } = route.params;
  const { addToCart } = useContext(CartContext);

  return (
    <SafeAreaView>
       <View style={styles.container}>
      <View style={styles.header}>
        <Icon style={{marginHorizontal:10}} name='bars' size={30} onPress={()=>navigation.openDrawer()}/>
          <Image style={styles.logo} source={require('../assets/Logo.png')}/>
          <TouchableOpacity>
            <Icon style={{marginLeft:35}} name='search' size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Icon style={{marginHorizontal:10}} name='shopping-bag' size={30}/>
          </TouchableOpacity>
    </View>
      <Image
        source={{ uri: product.image }}
        style={styles.productImage}
        resizeMode="contain"
      />
      <View style={styles.productInfoContainer}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
        <View style={styles.checkContainer}>
        <TouchableOpacity 
          onPress={() => addToCart(product)}
        style={styles.checkOutTab}>
          <Text style={[styles.checkout,{color:'#fff',fontSize:24,paddingTop:40}]}>ADD TO BASKET</Text>
            <Icon style={{top:-32,left:30}} size={30} color={'#fff'} name='plus'/>
            <Icon style={{left:340,top:-55}} size={30} color={'#fff'} name='heart'/>
        </TouchableOpacity>
      </View>
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 5,
  },
  productImage: {
    width: '100%',
    height: 300,
  },
  productInfoContainer: {
    padding: 5,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  productDescription: {
    fontSize: 16,
    marginVertical: 10,
  },
  productPrice: {
    fontSize: 20,
    fontWeight:'bold',
    color: '#ff6600',
    marginVertical: 10,
  },
  header:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:10,
    verticalAlign:'center',
    padding:20
  },
  logo:{
    marginLeft:70,
    height:48,
    width:120
  },
  checkout:{
    textAlign:'center',
    fontSize:20,
    fontFamily:'arial',
    fontWeight:'bold',

  },
  checkOutTab:{
    backgroundColor:'#000',
    padding:3,
    
  },
  checkContainer:{
    display:'flex',
    marginTop:10,
    position:'static'
  
  }
});
