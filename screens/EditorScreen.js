import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';

function EditorScreen({navigation}) {
    const handleHome = () => {
        navigation.navigate('Home');
      };
  return (
  <View style={{ backgroundColor: "#DFDEE0", flex: 1, alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', }}>
        <TouchableOpacity onPress={ () =>  navigation.navigate('Home')}>
                <AntDesign name='arrowleft' size={24} color="black"/>
        </TouchableOpacity>
    
    <Text style={styles.titulo}> Alterar Contato </Text>
        <TextInput style={styles.input} placeholder="Nome"/>
        <TextInput style={styles.input} placeholder="E-mail"/>
        <TextInput style={styles.input} placeholder="Telefone"/>

        <TouchableOpacity style={styles.botaoEditar} onPress={handleHome}>
            <Text style={styles.textoBotao}> Editar </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoSalvar} onPress={handleHome}>
            <Text style={styles.textoBotao}> Salvar </Text>
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
    botaoSalvar: {
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