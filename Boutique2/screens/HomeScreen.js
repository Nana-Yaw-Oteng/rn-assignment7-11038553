import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, Image, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { CartContext } from '../cartContext';
import  Icon  from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen({ navigation }) {

  const shortenTitle = (title, maxLength) => {
    if (title.length <= maxLength) {
      return title;
    } else {
      return title.substring(0, maxLength) + '...';
    }
  };
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

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
      <View style={styles.story}>
          <Text style={styles.storyText}>OUR STORY</Text>
          <TouchableOpacity style={[styles.storyIcons,{marginLeft:140}]}>
          <Icon style={{marginLeft:5}} name='sliders' size={25}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.storyIcons}>
          <Icon style={{marginLeft:3}} name='filter' size={25} color={'#ff944d'}/>
          </TouchableOpacity>
          </View>
    

      <FlatList
      numColumns={2}
      style={{marginBottom:205}}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { product: item })}>
            <View style={styles.productContainer}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productTitle}>{shortenTitle(item.title,40)}</Text>
              <Text style={styles.productDescription}>{shortenTitle(item.description,50)}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
              <Icon style={{left:125,top:-175}} name="plus-circle" size={28} onPress={() => addToCart(item)} />
              
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
    </SafeAreaView>
  );
 
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    padding:5,
  },
  productContainer: {
    padding: 32,
    
    // borderBottomWidth: 1,
    // borderBottomColor: '#ddd',
  },
  productImage: {
      width: '100%',
      height: 200,
      resizeMode: 'contain',
    },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    maxWidth:160,
   
  },
  productDescription:{
    fontSize:14,
    maxWidth:120,
    color:'#8c8c8c'
  },
  productPrice: {
    fontSize: 18,
    fontWeight:'bold',
    color: '#ff6600',
  },
  header:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:10,
    verticalAlign:'center',
  },
  story:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20,
    marginBottom:10,
    verticalAlign:'center',
  },
  logo:{
    marginLeft:70,
    height:48,
    width:120
  },
  storyText:{
    fontSize:26,
    fontStyle:'italic',
    fontFamily:'arial',
    marginLeft:10,
  },
  storyIcons:{
    backgroundColor:'#e6e6e6',
    width:43,
     padding:8,
     borderRadius:50
  }
});
