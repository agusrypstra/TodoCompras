import React from 'react';
import { StyleSheet, View, TouchableOpacity, Linking, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface RedSocial {
  nombre: string;
  url: string;
  icono: string; // Nombre del ícono (ej.: "logo-facebook", "logo-instagram")
}

interface RedesBoxProps {
  redes: RedSocial[]; // Las redes sociales que se reciben como parámetro
}

const RedesBox: React.FC<RedesBoxProps> = ({ redes }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
      
        {redes.map((red, index) => (
          <TouchableOpacity
            key={index}
            style={styles.iconContainer}
            onPress={() => Linking.openURL(red.url)}
          >
            <Icon name={red.icono} size={30} color="#0099FF" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    textAlign:"center",
    alignItems:"center",
  },
  title: {
    fontSize: 25
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 8
  },
  iconContainer: {
    padding: 10,
  },
});

export default RedesBox;