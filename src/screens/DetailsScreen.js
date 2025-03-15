import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { product } = route.params; // Certifique-se de que `route` está sendo passado

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.content}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>R$ {product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.category}>Categoria: {product.category}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: { flex: 1, backgroundColor: '#121212' },
  content: { alignItems: 'center', padding: 20 },
  image: { width: '100%', height: 300, resizeMode: 'contain', borderRadius: 10 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginTop: 10 },
  price: { fontSize: 20, color: '#ff0000', marginVertical: 10 },
  description: { fontSize: 16, color: '#ddd', textAlign: 'center', marginVertical: 10 },
  category: { fontSize: 16, color: '#800000', fontStyle: 'italic' },
});

export default DetailsScreen;