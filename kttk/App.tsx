import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ProductList from './components/ProductList';
import CartSummary from './components/CartSummary';

type Product = {
  id: string;
  name: string;
  price: number;
};

const PRODUCTS: Product[] = [
  { id: '1', name: 'Áo thun', price: 150000 },
  { id: '2', name: 'Quần jeans', price: 300000 },
  { id: '3', name: 'Giày sneaker', price: 700000 },
  { id: '4', name: 'Mũ lưỡi trai', price: 90000 },
];

const App: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const totalProducts = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => setShowCart(!showCart)}
      >
        <Text style={styles.cartIcon}>Giỏ hàng</Text>
      </TouchableOpacity>

      {showCart && (
        <CartSummary totalProducts={totalProducts} totalPrice={totalPrice} />
      )}

      <ProductList products={PRODUCTS} onAddToCart={handleAddToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  cartButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
    padding: 8,
    backgroundColor: '#e2e2e2',
    borderRadius: 20,
  },
  cartIcon: {
    fontSize: 28,
  },
});

export default App;