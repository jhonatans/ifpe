import * as React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function LoginScreen({navigation}) {
  const handleLogin = () => {
    navigation.navigate('Home');
  };



  const handleCadastro = () => {
    navigation.navigate('Cadastro');
  };
  
  return (
      
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     
     <View>
      <Image source={require('../figuras/icone.png')}style={{width: 200, height: 200}}/>
      </View>
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.titulo}>Bem-Vindo ao Meu Primeiro Aplicativo</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"/>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text style={styles.textoBotao}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoCadastro} onPress={handleCadastro}>
        <Text style={styles.textoBotao}>Cadastrar-se</Text>
      </TouchableOpacity>
      </View>
      
      
  </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffrrrgg',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 50,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  botao: {
    backgroundColor: '#1e2fc7',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '80%',
  },
  botaoCadastro: {
    backgroundColor: '#0C0B0B',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007bff',
    marginTop: 10,
    width: '80%',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


export default LoginScreen;