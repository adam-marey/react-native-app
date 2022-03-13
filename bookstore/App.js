import React, { useEffect } from 'react';
// import { useEffect } from 'react/cjs/react.production.min';
import Screen from './app/components/Screen';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (!granted) alert('You need to enale permission to access the library');
  };

  useEffect(() => {
    requestPermission();
  }, []);
  return <Screen></Screen>;
}
