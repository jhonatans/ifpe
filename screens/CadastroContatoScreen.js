import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput  } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';


function CadastroContatoScreen({navigation}) {
    const handleHome = () => {
        navigation.navigate('Home');
    };

    const [getNome,setNome] = useState();
    const [getEmail,setEmail] = useState();
    const [getTelefone,setTelefone] = useState();


    async function inserirDados(){
     axios.post('https://644c548917e2663b9d049ecb.mockapi.io/cliente/', {
            nome: getNome,
            email: getEmail,
            telefone: getTelefone
        })
        .then(function (response) {
            alert('Contato inserido com sucesso! ');
            navigation.navigate('Home');
        })
        .catch(function (error) {
            console.log(error);
        });  
    }

  return (
    <View style={{ backgroundColor: "#DFDEE0",flex: 1,  alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', }}>
   
    <View style={styles.boxTitulo}>
        <AntDesign style={styles.titulo} name="arrowleft" size={24} color="black" onPress={handleHome}/>
        <Text style={styles.titulo}> Criar Contato </Text>            
    </View>

    <TextInput style={styles.input} placeholder="Nome" onChangeText={text => setNome(text)} value={getNome}/>
    <TextInput style={styles.input} placeholder="E-mail" onChangeText={text => setEmail(text)} value={getEmail} />
    <TextInput style={styles.input} placeholder="Telefone" onChangeText={text => setTelefone(text)} value={getTelefone} />

    <TouchableOpacity style={styles.botaoCadastro} onPress={inserirDados}>
        <Text style={styles.textoBotao}>Cadastrar</Text>
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
        backgroundColor: '#1e2fc7',
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

export default CadastroContatoScreen;