import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import HeaderProfile from '../../components/Perfil/HeaderProfile.tsx';
import WhatsAppButton from '../../components/Perfil/WhatsappButton.tsx';
import DescriptionComponent from '../../components/Perfil/DescriptionComponent.tsx';
import GaleriaFotosComponent from '../../components/Perfil/Galeria/GaleriaFotosComponent.tsx';
import FooterComponent from '../../../presentation/components/footer/FooterComponent';
import { RootStackParamList } from 'src/presentation/routes/StackNavigator.tsx';
import { RouteProp, useRoute } from '@react-navigation/native';
import { usuarios } from '../../api/data';

const PerfilScreen: React.FC = () => {
  // Obtener el parámetro de la ruta
  const route = useRoute<RouteProp<RootStackParamList, 'Perfil'>>();
  const { perfilId } = route.params; 

  // Buscar la información del usuario en base al perfilId
  const usuario = usuarios.find(user => user.id === perfilId);

  if (!usuario) {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.scrollContainer}>
            <HeaderProfile avatar="" name="Perfil no encontrado" background="" />
          </View>
          <FooterComponent />
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.scrollContainer}>
          <HeaderProfile avatar={usuario.imagenes.avatar} name={usuario.info.nombre} background={usuario.imagenes.banner} />
          
          {usuario.info.descripcion && <DescriptionComponent description={usuario.info.descripcion} />}
          
          {usuario.imagenes.contenido && <GaleriaFotosComponent contenido={usuario.imagenes.contenido} />}
        </View>
      </ScrollView>

      <View style={styles.floatingButton}>
        <WhatsAppButton phoneNumber={usuario.contacto.whatsapp} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDD',
    flex:1
  },
  scrollContainer: {
    flexGrow: 1,
    gap: 15,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    zIndex: 100,
  },
});

export default PerfilScreen;
