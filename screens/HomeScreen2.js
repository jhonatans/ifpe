import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlatList } from 'react-native-web';
import {  Header, Icon  } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

function HomeScreen2({navigation}) {
    const handleHome = () => {
        navigation.navigate('Rota');
    };


    return (    
        <View style={styles.container.FlatList}>
           <View style={styles.boxTitulo}>
                 
                <Text style={styles.tituloRota}>Lista de Contatos</Text>
                <TouchableOpacity onPress={ () =>  navigation.navigate('RotaContato')}>
                  <AntDesign stylename="plus" size={24} color="black"/>
                </TouchableOpacity>                
            </View>       
           
           
            <View style={styles.box}>
                <View style={styles.inner}>
                <TouchableOpacity onPress={ () =>  navigation.navigate('Editor')}>
                <Image source={require('../figuras/icone.png')}style={{width: 40, height: 40, alignItems: 'left',
                            justifyContent: 'left',borderWidth: 1, borderRadius: 25,}}/>
                    <Text style={styles.textoDivs}>Nilson Professor</Text>
                    <Text style={styles.descricaoEmAndamento}>(81) 98800-0000</Text>
                    </TouchableOpacity>
                </View>
            </View>
          
        
            <View style={styles.box}>
                <View style={styles.inner}>
                <TouchableOpacity onPress={ () =>  navigation.navigate('Editor')}>
                <Image source={require('../figuras/icone.png')}style={{width: 40, height: 40, alignItems: 'left',
                            justifyContent: 'left',borderWidth: 1, borderRadius: 25,}}/>
                    <Text style={styles.textoDivs}>Jhonathan Rennan</Text>
                    <Text style={styles.descricaoEmAndamento}>(81) 99800-6666</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.box}>
                <View style={styles.inner}>
                <TouchableOpacity onPress={ () =>  navigation.navigate('Editor')}>
                <Image source={require('../figuras/icone.png')}style={{width: 40, height: 40, alignItems: 'left',
                            justifyContent: 'left',borderWidth: 1, borderRadius: 25,}}/>
                    <Text style={styles.textoDivs}>Renato Rosa</Text>
                    <Text style={styles.descricaoEmAndamento}>(81) 98675-1901</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.inner}>
                <TouchableOpacity onPress={ () =>  navigation.navigate('Editor')}>
                <Image source={require('../figuras/icone.png')}style={{width: 40, height: 40, alignItems: 'left',
                            justifyContent: 'left',borderWidth: 1, borderRadius: 25,}}/>
                    <Text style={styles.textoDivs}>Marcos Rennan</Text>
                    <Text style={styles.descricaoEmAndamento}>(81) 99876-0000</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.box}>
                <View style={styles.inner}>
                <TouchableOpacity onPress={ () =>  navigation.navigate('Editor')}>
                <Image source={require('../figuras/icone.png')}style={{width: 40, height: 40, alignItems: 'left',
                            justifyContent: 'left',borderWidth: 1, borderRadius: 25,}}/>
                    <Text style={styles.textoDivs}>Alfredo Andrade</Text>
                    <Text style={styles.descricaoEmAndamento}>(81) 98115-6008</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.box}>
                    
                <View style={styles.inner}>
                <TouchableOpacity onPress={ () =>  navigation.navigate('Editor')}>
                <Image source={require('../figuras/icone.png')}style={{width: 40, height: 40, alignItems: 'left',
                            justifyContent: 'left',borderWidth: 1, borderRadius: 25,}}/>
                    <Text style={styles.textoDivs}>José da Silva</Text>
                    <Text style={styles.descricaoEmAndamento}>(81) 93344-5589</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
      height: '12%',
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
    },
   
    header:{
      width: '100%',
      height: '20%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#DFDEE0',
    },
});

export default HomeScreen2;