import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  HomeScreen  from './screens/HomeScreen';
import  LoginScreen  from './screens/LoginScreen';
import  CadastroScreen  from './screens/CadastroScreen';
import  RotaScreen  from './screens/RotaScreen';
import  HomeScreen2  from './screens/HomeScreen2';
import CadastroContatoScreen from './screens/CadastroContatoScreen';
import EditorScreen from './screens/EditorScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen}  />
        <Stack.Screen name="Home" component={HomeScreen2}  />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Rota" component={RotaScreen} />
        <Stack.Screen name="RotaContato" component={CadastroContatoScreen} />
        <Stack.Screen name="Editor" component={EditorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;