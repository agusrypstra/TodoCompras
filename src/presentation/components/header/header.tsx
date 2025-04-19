import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParamList } from 'src/presentation/routes/StackNavigator';

const screenWidth = Dimensions.get('window').width; // Obtiene el ancho de la pantalla

export const Header: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuPosition = useSharedValue(-screenWidth); // Inicia fuera de la pantalla
  const navigation = useNavigation<RootStackParamList>();
  const toggleMenu = () => {
    menuVisible ? (menuPosition.value = withTiming(-screenWidth)) : (menuPosition.value = withTiming(0));
    setMenuVisible(!menuVisible);
  };

  const animatedMenuStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: menuPosition.value }],
  }));

  return (
    <>
      <View style={styles.header}>
        {/* Menú a la izquierda */}
        <TouchableOpacity style={styles.iconContainer} onPress={toggleMenu}>
          <Icon name="menu-outline" size={40} />
        </TouchableOpacity>

        {/* Logo en el centro */}
        <Image
          source={require('../../../assets/navigator/logo-nav.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Campana a la derecha */}
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="notifications-outline" size={40} />
        </TouchableOpacity>
      </View>

      {/* Menú animado */}
      <Animated.View style={[styles.menu, animatedMenuStyle]}>
        <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
          <Icon name="close-outline" size={40} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText} onPress={()=>{
            toggleMenu()
            navigation.navigate('Home')
            }}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Configuración</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '80%',
    height: '100%',
  },
  menu: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: screenWidth * 0.7, // Ocupa el 70% de la pantalla
    height: '100%',
    backgroundColor: '#fff',
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 10,
    zIndex:999
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuText: {
    fontSize: 22,
  },
});

export default Header;
