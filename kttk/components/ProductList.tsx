import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ProductItem from './ProductItem';

type Product = {
  id: string;
  name: string;
  price: number;
};

type ProductListProps = {
  products: Product[];
  onAddToCart: (product: Product) => void;
};

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => (
  <FlatList
    data={products}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <ProductItem product={item} onAddToCart={onAddToCart} />
    )}
    contentContainerStyle={styles.list}
  />
);

const styles = StyleSheet.create({
  list: { paddingBottom: 16 },
});

export default ProductList;