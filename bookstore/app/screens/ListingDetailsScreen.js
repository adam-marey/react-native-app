import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from '../components/AppText';

import ListItems from '../components/ListItems';
import colors from '../config/colors';

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/novel.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>red cover novel for sale</AppText>
        <AppText style={styles.price}>$10</AppText>
        <View style={styles.userContainer}>
          <ListItems
            image={require('../assets/sulaiman.jpg')}
            title="Sulaiman Marey"
            subTitle="4 Listings"
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
