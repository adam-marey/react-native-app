import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator';
import ListingEditScreen from './app/screens/ListingEditScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
