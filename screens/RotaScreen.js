import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function RotaScreen() {
  return (    
    <View style={styles.container}>
        <View style={styles.header}>
            <Ionicons style={styles.icon} name="person-outline" size={35} />
            <Text style={styles.titulo}>Minhas Rotas de Hoje</Text> 
        </View>
        <View style={styles.containerList}>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text style={styles.textoDivs}>Supermercado Pernambucano</Text>
                    <Text style={styles.descricaoEmAndamento}>10h - 11h</Text>
                    <TouchableOpacity style={styles.botaoCadastro}>
                        <Text style={styles.textoBotao}>Iniciar Rota</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.boxSecond}>
                <View style={styles.inner}>
                    <Text style={styles.textoDivs}>Supermercado Pernambucano</Text>
                    <Text style={styles.descricaoEmAndamento}>13h - 14h</Text>
                </View>
            </View>
            <View style={styles.boxSecond}>
                <View style={styles.inner}>
                    <Text style={styles.textoDivs}>Supermercado Pernambucano</Text>
                    <Text style={styles.descricaoEmAndamento}>15h - 16h30</Text>
                </View>
            </View>
        </View>
        <View style={styles.boxTitulo}>
            <Text style={styles.tituloRota}>Rota em Andamento</Text>
        </View>
    </View>
 );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    icon:{
        padding: 15,
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 18
    },
    header:{
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DFDEE0',
    },
    containerList:{
        width: '100%',
        height: '85%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#DFDEE0'
    },
    box:{
        width: '100%',
        height: '25%',
        padding: 5,
    },
    boxSecond:{
        width: '100%',
        height: '15%',
        padding: 5,
    },
    inner:{
        flex: 1,
        backgroundColor: '#68A54C',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
    },
    descricaoEmAndamento:{
        fontSize: 17,
        color: '#F0E3E3',
        fontWeight: 'bold',
    },
    textoDivs:{
        fontWeight: 'bold',
        fontSize: 17,
    },
    botaoCadastro: {
        width: '85%',
        height: 35,
        backgroundColor: '#0C0B0B',
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 15,
        marginBottom: 10,
        borderColor: '#007bff',
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    boxTitulo:{
        width: '100%',
        height: '12%',
        padding: 18,
    },    
    tituloRota:{
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default RotaScreen;