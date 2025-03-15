import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductCard = ({ product, onPress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.thumbnail }} style={styles.image} />
      </View>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>R$ {product.price}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onPress(product)}>
        <Text style={styles.buttonText}>Ver Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { 
    backgroundColor: '#222', 
    padding: 15, 
    margin: 10, 
    borderRadius: 10, 
    alignItems: 'center',
    width: 180, // Aumentei o tamanho dos cards
    overflow: 'hidden'
  },
  imageContainer: {
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333', 
    borderRadius: 5,
    overflow: 'hidden'
  },
  image: { 
    width: '100%', 
    height: '100%', 
    resizeMode: 'contain' 
  },
  title: { 
    color: '#fff', 
    fontSize: 14, 
    fontWeight: 'bold', 
    marginVertical: 5,
    textAlign: 'center' 
  },
  price: { 
    color: 'lightgreen', 
    fontSize: 14 
  },
  button: { 
    backgroundColor: '00FF00', 
    padding: 10, 
    borderRadius: 5, 
    marginTop: 10, 
    width: '100%' 
  },
  buttonText: { 
    color: '#008000', 
    fontWeight: 'bold', 
    textAlign: 'center' 
  }
});

export default ProductCard;