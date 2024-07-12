import React, { useContext } from 'react';
import { View, Text, FlatList, Image, StyleSheet,SafeAreaView ,TouchableOpacity} from 'react-native';
import { CartContext } from '../cartContext';
import  Icon  from 'react-native-vector-icons/FontAwesome';

export default function CartScreen({navigation}) {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <SafeAreaView style={{marginBottom:246}}>
      
    <View style={styles.container}>
    <View style={styles.cartItems}>
      <Icon style={{marginHorizontal:10}} name='bars' size={30} onPress={()=>navigation.openDrawer()}/>
        <Image  source={require('../assets/Logo.png')}/>
        <TouchableOpacity>
        <Icon style={{marginRight:10}} name='search' size={25} onPress={() => console.log('Search icon pressed')}/>
        </TouchableOpacity>
      </View>
      <View style={{borderBottomWidth: 1,borderColor: '#ccc'}}>
          <Text style={styles.checkout}>CHECKOUT</Text>
        </View>
      <FlatList
    
        keyExtractor={(item) => item.id.toString()}
        data={cartItems}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.productContainer}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>     
           <Icon style={{left:350}} name='times-circle' size={30} color={'red'} onPress={() => removeFromCart(item.id)} />
            
      </View> 
      
        )}
        
      />
      
    </View>
    <View>
      <Text style={styles.totalText}>
        EST. TOTAL: <Text style={{color:'#ff6600',fontWeight:'bold'}}>${cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</Text>
      </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    backgroundColor: '#fff',
  },
  productContainer: {
    padding: 5,

  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  productTitle: {
    fontSize: 16,
    width:200,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    fontWeight:'bold',
    color: '#ff6600',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop:5
    
    
  },
  cartItems:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:10,
    padding:10
  },
  checkout:{
    textAlign:'center',
    fontSize:20,
    fontFamily:'arial',
    fontWeight:'bold',
  },
});
