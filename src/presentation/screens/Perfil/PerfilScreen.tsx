import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import HeaderProfile from '../../components/Perfil/HeaderProfile.tsx';
import WhatsAppButton from '../../components/Perfil/WhatsappButton.tsx';
import { PerfilScreenProps } from '../../../presentation/interfaces/Perfil/PerfilScreenProps';
import DescriptionComponent from '../../components/Perfil/DescriptionComponent.tsx';
import GaleriaFotosComponent from '../../components/Perfil/Galeria/GaleriaFotosComponent.tsx';
import FooterComponent from '../../../presentation/components/footer/FooterComponent';


// Definimos las propiedades que recibirá el componente

const PerfilScreen: React.FC<PerfilScreenProps> = ({
  avatar,
  name,
  background,
  phoneNumber,
  message,
  description,
  fotos
}) => {
  const desc = [
    'Mantenimiento preventivo y correctivo: Cambio de aceite, filtros, revisión de frenos, y afinación de motor.',
    'Reparaciones de motores: Diagnóstico y reparación de motores a gasolina y diésel.',
    'Sistema eléctrico: Solución de problemas de arranque, batería, luces, y cableado eléctrico en general.',
    'Suspensión y dirección: Reparación de amortiguadores, alineación y balanceo para una conducción segura.',
    'Diagnóstico por scanner: Uso de herramientas avanzadas para detectar fallas y optimizar el rendimiento del vehículo.',
  ];
  
  return (
    <View style={styles.container}>
      {/* Cabecera del Perfil */}
      <ScrollView>
          <View style={styles.scrollContainer}>

          <HeaderProfile avatar={avatar} name={name} background={background} />

          {description != undefined ? <DescriptionComponent description={desc}/> : undefined }
          
          <GaleriaFotosComponent fotos={fotos}/>

        </View>
        <FooterComponent />

      </ScrollView>
      {/* Botón de WhatsApp */}

      <View style={styles.floatingButton}>
        <WhatsAppButton phoneNumber={phoneNumber} message={message} />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDD',
  },
  scrollContainer:{
    flexGrow: 1,
    gap: 15
  },
  buttonText: {
    color: '#007BFF',
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 16,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    zIndex: 100, // Asegura que esté encima del contenido
  },
});

export default PerfilScreen;
