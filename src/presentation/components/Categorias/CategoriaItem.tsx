import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface ElementItemProps {
  id:number;
  nombre: string;
  imagen: any; // Usa ImageSourcePropType si trabajas con imágenes locales
  onPress: () => void;
}

const ElementItem: React.FC<ElementItemProps> = ({nombre, imagen,onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={imagen} style={styles.image} />
      </View>
      <Text style={styles.text}>{nombre}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '30%',
    alignItems: 'center',
    margin: '1.5%',
    padding:10
  },
  imageContainer: {
    width: '100%', // Ajusta según el tamaño deseado
    height: 180,
    borderRadius: 100, // Hace que sea circular
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
    borderRadius:100
  },
  text: {
    marginTop: 5, // Espacio entre el círculo y el texto
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ElementItem;
