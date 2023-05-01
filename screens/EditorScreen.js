import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';

function EditorScreen({route,navigation}){

    const [getNome,setNome] = useState();
    const [getCpf,setCpf] = useState();
    const [getEmail,setEmail] = useState();
    const [getTelefone,setTelefone] = useState();
    const [getId,setId] = useState();
    const [getAlterar,setAlterar] = useState();


    useEffect(()=>{
      if(route.params){
            const { nome } =  route.params 
            const { telefone } =  route.params
            const { email } =  route.params 
            const { cpf } =  route.params 
            const { id } =  route.params
            const { alterar } =  route.params
            console.log(id);

            setNome(nome)
            setTelefone(telefone)
            setEmail(email)
            setCpf(cpf)
            setId(id)
            setAlterar(alterar)

      }
    },[])  
  
    function alterarDados(){
        axios.put('https://644c548917e2663b9d049ecb.mockapi.io/cliente/'+getId,{
         nome: getNome,
         telefone: getTelefone,
         email: getEmail
          
        }
        )
        .then(function (response) {
          console.log(response);
          alert('Contato Editado com Sucesso!')
        navigation.navigate('Home')
        }
        )
        .catch(function (error) {
            
          console.log(error);
        });
    }
    

    function excluirDados(){

      axios.delete('https://644c548917e2663b9d049ecb.mockapi.io/cliente/'+getId,{
        nome: getNome,
        telefone: getTelefone,
        email: getEmail
      }
      )
      .then(function (response) {
        console.log(response);
        alert('Contato Deletado com Sucesso!')
        navigation.navigate('Home')
      }
      )
      .catch(function (error) {
          
        console.log(error);
      });
      
      
    }
  return (
  <View style={{ backgroundColor: "#DFDEE0", flex: 1, alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', }}>
        <TouchableOpacity onPress={ () =>  navigation.navigate('Home')}>
                <AntDesign name='arrowleft' size={24} color="black"/>
        </TouchableOpacity>
    
    <Text style={styles.titulo}> Alterar Contato </Text>
        <TextInput style={styles.input} placeholder="Nome" onChangeText={text => setNome(text)} value={getNome}/>
        <TextInput style={styles.input} placeholder="E-mail" onChangeText={text => setEmail(text)} value={getEmail}/>
        <TextInput style={styles.input} placeholder="Telefone" onChangeText={text => setTelefone(text)} value={getTelefone}/>

        <TouchableOpacity style={styles.botaoEditar} onPress={alterarDados}>
            <Text style={styles.textoBotao}> Editar </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoExcluir} onPress={excluirDados}>
            <Text style={styles.textoBotao}> Excluir </Text>
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
    botaoEditar: {
        width: '85%',
        backgroundColor: '#1e2fc7',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007bff',
        marginTop: 10,
        marginBottom: 30
    },
    botaoExcluir: {
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

export default EditorScreen;