import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import Home from './pages/Home';
import Fotos from './pages/Fotos';
import cadastro from './pages/cadastro';
import localizacao from './pages/localizacao';
 
const Menu = createStackNavigator();
 
function Routes() {
    return (
        <NavigationContainer>
            <Menu.Navigator>
                <Menu.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Menu.Screen name="Fotos" component={Fotos} />
                <Menu.Screen name="Localizacao" component={localizacao} />
                <Menu.Screen name="Cadastro" component={cadastro} />
            </Menu.Navigator>
        </NavigationContainer>
    );
}
 
export default Routes;