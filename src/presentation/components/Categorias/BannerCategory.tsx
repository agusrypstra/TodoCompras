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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 600, // Ajusta el tamaño según tus necesidades
    height: 350, // Ajusta el tamaño según tus necesidades
  },
  image: {
    width: '100%', // Ajusta el tamaño según tus necesidades
    height: '100%', // Ajusta el tamaño según tus necesidades
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