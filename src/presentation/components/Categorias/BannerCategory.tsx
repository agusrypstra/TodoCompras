import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet, Text } from 'react-native';

interface BannerCategoryProps {
  handlePress: (id: number) => void;
  id: number;
  nombre: string;
  imagen: any; // La imagen puede ser un require() o una URL
}

const BannerCategory: React.FC<BannerCategoryProps> = ({ handlePress, id, nombre, imagen }) => {
  return (
    <TouchableOpacity onPress={() => handlePress(id)} style={styles.container}>
      <Image source={imagen} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{nombre}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 150, // Ajusta el tamaño según tus necesidades
    height: 150, // Ajusta el tamaño según tus necesidades
    borderRadius: 10, // Bordes redondeados
  },
  textContainer: {
    marginTop: 10, // Espacio entre la imagen y el texto
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default BannerCategory;