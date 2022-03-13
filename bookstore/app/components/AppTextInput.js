import react from 'react';

import React from 'react';
import { TextInput, View, TextInput } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import colors from '../config/colors';
function AppTextInput(props) {
  return (
    <View>
      <TextInput />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flextDirection: 'row',
    width: '100%',
    padding: 15,
  },
});
export default AppTextInput;
