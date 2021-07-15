import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const ResDetails = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.headingStyle}>{result.name}</Text>
      <Text style={styles.textStyle}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 250,
    width: 250,
    borderRadius: 10,
    marginBottom: 5
  },
  headingStyle: {
    fontWeight: 'bold',
    fontSize: 18
  },
  textStyle: {
    fontSize: 16
  },
  container: {
    marginLeft: 15,
    marginTop: 5,
    marginBottom: 15
  }
});

export default ResDetails;
