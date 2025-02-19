import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Header = () => {
  return (
    <View style={styles.header}>
      {/* Menú a la izquierda */}
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="menu-outline" size={40}/>
      </TouchableOpacity>

      {/* Logo en el centro */}
      <Image
        source={require('../../../assets/navigator/logo-nav.png')} // Reemplaza con tu logo
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Campana a la derecha */}
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="notifications-outline" size={40}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', // Alinea los elementos en fila
    alignItems: 'center', // Centra los elementos verticalmente
    justifyContent: 'space-between', // Espacio entre los elementos
    paddingHorizontal: 16, // Margen horizontal
    paddingVertical: 10, // Margen vertical
    backgroundColor: '#fff', // Fondo blanco
    borderBottomWidth: 1, // Línea inferior opcional
    borderBottomColor: '#ccc', // Color de la línea inferior
  },
  iconContainer: {
    width: 40, // Tamaño del contenedor del ícono
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '80%', // Ajusta el ancho del logo
    height: '100%', // Ajusta la altura del logo
  },
});
