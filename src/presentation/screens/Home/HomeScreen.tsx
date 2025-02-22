import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ScrollView } from 'react-native-gesture-handler';

type RootStackParamList = {
  Login: undefined; // Home no recibe parámetros
  Registro: undefined; // Home no recibe parámetros
  Home: undefined; // Home no recibe parámetros
  Categorias: undefined; // Home no recibe parámetros
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;


export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}: HomeScreenProps) => {

  return (
    <View style={styles.container}>

        <Text style={styles.title}>Inicio</Text>
        <View style={styles.sectionsContainer}>
          <TouchableOpacity style={styles.sectionCard} onPress={()=>{navigation.navigate('Categorias')}}></TouchableOpacity>
          <TouchableOpacity style={styles.sectionCard}></TouchableOpacity>
          <TouchableOpacity style={styles.sectionCard}></TouchableOpacity>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    gap: 50,
    paddingVertical: 30
  },
  title:{
    fontSize: 35,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionsContainer:{
    width:'100%',
    height:'100%',
    display:'flex',
    flexDirection:'column',
    gap:40,
    alignItems: 'center',
  },
  sectionCard:{
    width: '65%',
    height: '25%',
    backgroundColor:'red'
  }
})

export default HomeScreen
