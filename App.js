import { Dimensions, StyleSheet } from 'react-native';

import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {

  const [isPortrait, setIsPortrait] = useState(true)

  const statePortrait = () => setIsPortrait(onPortrait)

  const onPortrait = () => {
    const dim = Dimensions.get("screen")
    return dim.height > dim.width
  }

  console.log(isPortrait);

  useEffect(() => {
    Dimensions.addEventListener('change', statePortrait)
    return () => {
      Dimensions.removeEventListener('change', statePortrait)
    }
  }, [])

  const [loaded] = useFonts({
    "FiraSansBold": require('./src/assets/fonts/FiraSans-Bold.ttf'),
    "FiraSansRegular": require('./src/assets/fonts/FiraSans-Regular.ttf')
  })

  //if (!loaded) return null

  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
  );
}