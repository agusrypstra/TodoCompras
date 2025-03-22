import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ImageViewing from 'react-native-image-viewing';

interface GaleriaFotosComponentProps {
  contenido: { imagen: any, descripcionImagen: string }[];
}

const GaleriaFotosComponent: React.FC<GaleriaFotosComponentProps> = ({ contenido }) => {
  const [isVisible, setIsVisible] = useState(false); // Controla la visibilidad del modal
  const [selectedIndex, setSelectedIndex] = useState(0); // Índice de la imagen seleccionada

  // Si no hay contenido o está vacío, muestra un mensaje
  if (contenido === undefined || contenido.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Galería de fotos</Text>
        <Text style={styles.noImages}>No hay fotos disponibles</Text>
      </View>
    );
  }

  // Convierte imágenes locales y remotas a un formato uniforme para ImageViewing
  const formattedImages = contenido.map((foto) => {
    return typeof foto.imagen === 'string'
      ? { uri: foto.imagen } // Para imágenes remotas
      : Image.resolveAssetSource(foto.imagen); // Para imágenes locales
  });

  // Abre el modal con la imagen seleccionada
  const openImage = (index: number) => {
    setSelectedIndex(index);
    setIsVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galería de fotos</Text>
      <View style={styles.grid}>
        {contenido.map((item, index) => (
          <TouchableOpacity key={index} style={styles.item} onPress={() => openImage(index)}>
            <Image source={formattedImages[index]} style={styles.image} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Modal para visualizar la imagen */}
      <ImageViewing
        images={formattedImages}
        imageIndex={selectedIndex}
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  noImages: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  item: {
    margin: 5,
    alignItems: 'center',
    width: 150,
    height: 150,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
});

export default GaleriaFotosComponent;