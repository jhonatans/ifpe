import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image  } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import axios from 'axios';
import { useIsFocused } from "@react-navigation/native";
import {signOut } from "firebase/auth";
import { auth } from "./Firebase.js";


function HomeScreen2({route,navigation}) {
    const [getData, setData] = useState([]);
    const isFocused = useIsFocused();
    
    const logOutUser = () => {
      signOut(auth).then(() => {
        alert('Usuário deslogado com sucesso! ');
        navigation.navigate('Login');
        }).catch((error) => {
          console.log(error); 
        });
    };
    
      useEffect(()=>{    
        async function consultarDados(){
          axios.get('https://644c548917e2663b9d049ecb.mockapi.io/cliente/')          
          .then(function (response) {
            setData(response.data);
          }).catch(function (error) {
            console.log(error);      
          });      
        }
        consultarDados();
      }, [isFocused])  


        const handleCadastroContato = () => {
            navigation.navigate('RotaContato');
          };
          const handleEditContato = () => {
            navigation.navigate('Editor');
          };
          return (    
            <View style={styles.container}>
              <View style={styles.boxTitulo}>
                  <Text style={styles.tituloRota}>Lista de Contatos</Text>
                  <TouchableOpacity onPress={handleCadastroContato}>
                    <AntDesign style={styles.titulo} name="plus" size={20} color="black" />
                  </TouchableOpacity> 

                  <TouchableOpacity onPress={logOutUser} alignItems="right">
                      <Text style={styles.titulo}>Sair</Text>
                  </TouchableOpacity>

             

              </View>


                  {
                    getData.map((linha, i) => (
                      <View style={styles.box} >
                        <View style={styles.inner} >
                        <TouchableOpacity onPress={()=>navigation.navigate('Editor',{id:linha.id})}>
                        <Image source={require('../figuras/icone.png')}style={{width: 40, height: 40, alignItems: 'left',
                            justifyContent: 'left',borderWidth: 1, borderRadius: 25,}}/>
                            <Text style={styles.textoDivs}>{linha.nome}</Text>
                            <Text style={styles.descricaoEmAndamento}>{linha.telefone}</Text>
                        </TouchableOpacity>                       
                        </View>
                      </View>                    
                      
                    ))
                  }                       
            </View>
         );

        
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '85%',
        padding: 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#DFDEE0'
    },
    box:{
        width: '100%',
        height: '15%',
        padding: 3,
    },
    inner:{
        flex: 1,
        backgroundColor: '#1e2fc7',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
    },
    boxReport:{
        width: '99%',
        height: '15%',
        padding: 10,
    },
    boxTitulo:{
      width: '100%',
      height: '20%',
      padding: 18,
    },
    boxRota:{
        width: '99%',
        height: '35%',
        padding: 5,
    },
    textoDivs:{
        fontWeight: 'bold',
        fontSize: 17,
        alignItems: 'right',
        justifyContent: 'center',
    },
    descricaoEmAndamento:{
        fontSize: 17,
        color: '#F0E3E3',
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 18
        
    },
    tituloRota:{
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: '15%',
    },
   
    header:{
      width: '100%',
      height: '20%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#DFDEE0',
    },
    titulo:{
      fontWeight: 'bold',
      marginRight: 15,
      fontSize: 15,
      paddingTop: 5

    },
    
});

export default HomeScreen2;
