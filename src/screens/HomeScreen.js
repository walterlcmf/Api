import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="orange" style={styles.loading} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Define duas colunas
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <ProductCard 
            product={item} 
            onPress={() => navigation.navigate('DetailsScreen', { product: item })} 
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    paddingHorizontal: 10, 
  },
  list: {
    justifyContent: 'space-between', // Distribui os cards uniformemente
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;