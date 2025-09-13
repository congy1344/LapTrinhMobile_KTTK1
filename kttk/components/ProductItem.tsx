import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

type Product = {
  id: string;
  name: string;
  price: number;
};

type ProductItemProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

const ProductItem: React.FC<ProductItemProps> = ({ product, onAddToCart }) => (
  <View style={styles.itemContainer}>
    <View>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price.toLocaleString()} đ</Text>
    </View>
    <Button title="Thêm vào giỏ" onPress={() => onAddToCart(product)} />
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
  name: { fontSize: 18, fontWeight: 'bold' },
  price: { fontSize: 16, color: 'green', marginTop: 4 },
});

export default ProductItem;