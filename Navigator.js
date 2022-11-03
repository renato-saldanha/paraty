import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import TelaInicial from './src/Screens/TelaInicial';
import Lista from './src/Componentes/Lista';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TelaInicial">
          <Stack.Screen name="TelaInicial" component={TelaInicial} />
          <Stack.Screen name="Lista" component={Lista} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
