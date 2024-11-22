import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Fotos from './src/pages/Fotos';
import Cadastro from './src/pages/Cadastro';
import Localização from './src/pages/Localização';
 
 
 
 
const Stack = createNativeStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Página inicial",
            headerStyle: {
              backgroundColor: '#333',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{
            title: "Sobre ::: a empresa"
          }}
        />
        <Stack.Screen
          name="Fotos"
          component={Fotos}
          options={{
            title: "Fotos ::: a empresa"
          }}
         
        />
         <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            title: "Cadastro ::: a empresa"
          }}
         
        />
         <Stack.Screen
          name="Localização"
          component={Localização}
          options={{
            title: "Localização ::: a empresa"
          }}
         
        />
 
     
 
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
 