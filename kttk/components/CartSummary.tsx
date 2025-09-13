import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type CartSummaryProps = {
  totalProducts: number;
  totalPrice: number;
};

const CartSummary: React.FC<CartSummaryProps> = ({ totalProducts, totalPrice }) => (
  <View style={styles.cartInfo}>
    <Text style={styles.cartText}>
      Giỏ hàng: {totalProducts} sản phẩm
    </Text>
    <Text style={styles.cartText}>
      Tổng tiền: {totalPrice.toLocaleString()} đ
    </Text>
  </View>
);

const styles = StyleSheet.create({
  cartInfo: { marginBottom: 16 },
  cartText: { fontSize: 18, fontWeight: 'bold', color: '#333' },
});

export default CartSummary;