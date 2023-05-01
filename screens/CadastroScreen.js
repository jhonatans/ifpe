import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput  } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase.js";



function CadastroScreen({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleHome = () => {
      navigation.navigate('Login');
  };

  const handleCadastro = async () => {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          alert('Usuário cadastrado com sucesso! ');
          navigation.navigate('Home');
      })
      .catch((error) => {
          console.log('Erro ao cadastrar usuário!' + error);
          alert('Erro ao cadastrar usuário! ');
      });
  };

return (
<View style={{ backgroundColor: "#DFDEE0", flex: 1, alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', }}>
      <View style={styles.boxTitulo}>
          <AntDesign style={styles.titulo} name="arrowleft" size={34} color="black" onPress={handleHome}/>
          <Text style={styles.titulo}>Criar conta</Text>
      </View>
      <TextInput style={styles.input} placeholder="E-mail" onChangeText={(text) => setEmail(text)}/>
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} onChangeText={(text) => setPassword(text)}/>

      <TouchableOpacity style={styles.botaoCadastro} onPress={handleCadastro}>
          <Text style={styles.textoBotao}>Salvar</Text>
      </TouchableOpacity>
</View>
);
}

const styles = StyleSheet.create({
    titulo:{
        fontWeight: 'bold',
        marginTop: 20,
        fontSize: 20,
        textAlign: 'center',
    },
    input: {
        width: '85%',
        marginVertical: 20,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#FFFDFD'
    },
    botaoCadastro: {
        width: '85%',
        backgroundColor: '#0C0B0B',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007bff',
        marginTop: 10,
        marginBottom: 30
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
  });

export default CadastroScreen;