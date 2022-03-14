import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import colors from '../config/colors';
import ListItem from '../components/lists/ListItem';
import Text from '../components/Text';

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/novel.jpg')} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}> Old Novel </Text>
        <Text style={styles.price}>$10</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/sulaiman.jpg')}
            title="Sulaiman Marey"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
