// ----------------------------------------- DEPENDENCIAS ------------------------------------
import 'react-native-gesture-handler';
import 'react-native-url-polyfill/auto'
import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  View, 
} from 'react-native';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { MenuProvider } from 'react-native-popup-menu';
// ------------------------------------- COMPONENTES -------------------------
import AuthNavigator from './navigation/AuthNavigator';
import { UserCodeProvider } from './screens/auth/UserCodeProvider';
SplashScreen.preventAutoHideAsync();

export default function App(){
  const [isLoaded] = useFonts({   //Fuentes de letra usables en toda la app.
    "OpenSans-ExtraBold": require("./assets/fonts/OpenSans-ExtraBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-Extra-Bold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Kod-Bold": require("./assets/fonts/Kodchasan-Bold.ttf"),
    "Kod-Regular": require("./assets/fonts/Kodchasan-Regular.ttf"),
    "Riot-Regular": require("./assets/fonts/ProtestRiot-Regular.ttf"),
    "Lilita": require("./assets/fonts/LilitaOne-Regular.ttf"),
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return (
    <UserCodeProvider>
      <MenuProvider             //Elemento que permite generar pop-menu (engloba el contenedor de navegación para poder desplazarse).
      >
        <NavigationContainer    //Contenedor de navegación que engloba las pantallas y demás atajos de la app.
        >
          <View onLayout = {handleOnLayout}>
          </View>
          <AuthNavigator        //Principal navegador de pantallas (incluye home screen, login, sign up y forgot password).
          />
        </NavigationContainer>
      </MenuProvider>
    </UserCodeProvider>
  );
}