import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'; // npx expo install expo-font @expo-google-fonts/montserrat
import AppLoading from 'expo-app-loading'; // expo install expo-app-loading

import Cesta from './src/telas/Cesta/index.js';
import mock from "./src/mocks/cesta.js"

export default function App() {
  const [fonteCarregada] = useFonts ({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  //caso a fonte não tenha sido carregada ainda, exibirá o loading
  if (!fonteCarregada) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex:1}}>
      <StatusBar />
      <Cesta  {...mock} />
    </SafeAreaView>
  );
};
