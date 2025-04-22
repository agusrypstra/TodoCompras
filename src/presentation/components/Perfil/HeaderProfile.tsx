import React from 'react'
import { Image, StyleSheet, View,Text } from 'react-native'
import RedesBox from './RedesBox.tsx';
import InformacionBox from './Informacion/InformacionBox.tsx';

interface HeaderProfileProps{
    background: any; // Imagen de fondo (puede ser un `require` o URI)
    avatar: any; // Imagen del avatar (puede ser un `require` o URI)
    name: string; // Nombre del usuario
    description?: string; // Descripción del usuario (opcional)
}

const HeaderProfile: React.FC<HeaderProfileProps> = ({ background, avatar, name }) => {
  const redes = [
        { nombre: 'Facebook', url: 'https://facebook.com', icono: 'logo-facebook' },
        { nombre: 'Instagram', url: 'https://instagram.com', icono: 'logo-instagram' },
        {nombre: 'Web', url:'https://google.com',icono: 'globe-outline'}, 
      ];

  return (
    <View style={styles.container}>
      {/* Fondo */}
      <Image source={background} style={styles.backgroundImage} resizeMode="cover" />
      {/* Imagen de perfil circular */}
      <View style={styles.avatarContainer}>
        <Image source={avatar} style={styles.avatar} />
      </View>
      
      {/* Texto del perfil */}
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.categoryText}>Mecánico</Text>
      {redes.length > 0 ? <RedesBox redes={redes}/>  : undefined}
      </View>
        <InformacionBox />
    </View>
    
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        width: '100%',
        alignItems: 'center',
        overflow: 'hidden',
        gap:30,
        paddingBottom:25
      },
      backgroundImage: {
        width: '100%',
        height: 150,
      },
      avatarContainer: {
        position: 'absolute',
        top: 40, // Ajusta este valor según el diseño para centrar el avatar
        backgroundColor: '#fff',
        borderRadius: 90, // Este valor debe coincidir con la mitad del width/height del avata
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      avatar: {
        width: 180, // Tamaño actualizado del avatar
        height: 180, // Tamaño actualizado del avatar
        borderRadius: 90, // La mitad del width/height
      },
      textContainer: {
        marginTop: 70, // Ajusta para dejar espacio debajo del avatar
        alignItems: 'center',
      },
      name: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#333',
      },
      categoryText: {
        fontSize: 20,
        color: '#555',
      },
      
  });
export default HeaderProfile
