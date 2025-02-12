import React from 'react'
import { StyleSheet, Linking, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

interface WhatsAppButtonProps {
  phoneNumber?: number;
  message?: string;
}

const  WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message }) => {
    const handleWhatsAppPress = () => {
        console.log("object")
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        Linking.openURL(url).catch((err) => console.error("Error opening WhatsApp", err));
      };
    
  return (
    <Pressable style={styles.button} onPressIn={handleWhatsAppPress} onLongPress={handleWhatsAppPress}>
      <Icon name="logo-whatsapp" size={50} color="#fff" />
    </Pressable>
  )
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#25D366',
    borderRadius: 50,
    padding: 15,
    elevation: 5, // Sombra en Android
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999, // Encima del contenido desplazable
  },
});


export default WhatsAppButton
