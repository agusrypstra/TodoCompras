import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import CategoriasGrid from '../../components/Categorias/CategoriasGrid'

import {logos} from '../../../assets/categoriesIcons/assets'
import { ScrollView } from 'react-native-gesture-handler'

const CategoriasScreen: React.FC = () => {
    const categorias = [
        { id: 1, nombre: 'Comida', imagen: logos.comidas },
        { id: 2, nombre: 'Pollería', imagen: logos.polleria },
        { id: 3, nombre: 'Carnicería', imagen: logos.carniceria },
        { id: 4, nombre: 'Verdulería', imagen: logos.verduleria },
        { id: 5, nombre: 'Pescadería', imagen: logos.pescaderia },
        { id: 6, nombre: 'Panadería', imagen: logos.panaderia },
        { id: 7, nombre: 'Comida', imagen: logos.comidas },
        { id: 8, nombre: 'Pollería', imagen: logos.polleria },
        { id: 9, nombre: 'Carnicería', imagen: logos.carniceria },
        { id: 10, nombre: 'Verdulería', imagen: logos.verduleria },
        { id: 11, nombre: 'Pescadería', imagen: logos.pescaderia },
        { id: 12, nombre: 'Panadería', imagen: logos.panaderia },
        { id: 13, nombre: 'Comida', imagen: logos.comidas },
        { id: 14, nombre: 'Pollería', imagen: logos.polleria },
        { id: 15, nombre: 'Carnicería', imagen: logos.carniceria },
        { id: 16, nombre: 'Verdulería', imagen: logos.verduleria },
        { id: 17, nombre: 'Pescadería', imagen: logos.pescaderia },
        { id: 18, nombre: 'Panadería', imagen: logos.panaderia },
        { id: 19, nombre: 'Comida', imagen: logos.comidas },
        { id: 20, nombre: 'Pollería', imagen: logos.polleria },
        { id: 21, nombre: 'Carnicería', imagen: logos.carniceria },
        { id: 22, nombre: 'Verdulería', imagen: logos.verduleria },
        { id: 23, nombre: 'Pescadería', imagen: logos.pescaderia },
        { id: 24, nombre: 'Panadería', imagen: logos.panaderia },
      ];

      const handleCategoriaPress = (categoria: string) => {
        Alert.alert('Seleccionaste', categoria);
      };
    
    
    return (
        <ScrollView>
            <View style={{ flex: 1, padding: 30, alignItems:'center'}}>
                <Text style={styles.title}>Categorias</Text>
                <CategoriasGrid categorias={categorias} onCategoriaPress={handleCategoriaPress} />
            </View>
        </ScrollView>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        textAlign: 'center'
    },
    title:{
        fontSize: 35,
        fontWeight: 'bold',
        color: '#333',
    }
})
export default CategoriasScreen