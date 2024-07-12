import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import ProductDetailScreen from './screens/productDetailScreen';
import CartScreen from './screens/cartScreen';
import { CartProvider } from './cartContext';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
          <Drawer.Screen name="ProductDetail" component={ProductDetailScreen} options={{headerShown:false}} />
          <Drawer.Screen name="Cart" component={CartScreen} options={{headerShown:false}} />
        </Drawer.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
