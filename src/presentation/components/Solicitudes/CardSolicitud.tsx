import React, { useEffect, useState } from 'react';
import { Modal, TextInput, Alert } from 'react-native';

import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { LayoutAnimation, Platform, UIManager } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
 // o react-native-vector-icons/Ionicons

interface SolicitudRegistroLocal {
  nombre: string;
  fotoPerfil: string;
  descripcion: string;
  categoria: string;
  telefonoWhatsapp?: string;
  telefonoLlamadas?: string;
}

const LocalCard: React.FC<SolicitudRegistroLocal> = ({
  nombre,
  fotoPerfil,
  descripcion,
  categoria,
  telefonoLlamadas,
    telefonoWhatsapp,
}) => {

const [modalAceptarVisible, setModalAceptarVisible] = useState(false);
const [modalRechazoVisible, setModalRechazoVisible] = useState(false);
const [motivoRechazo, setMotivoRechazo] = useState('');

  const [expandido, setExpandido] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
  
  }, [])
  
  const handlePress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandido(!expandido);
  }
    
  return (
    <View>
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: fotoPerfil }} style={styles.imagen} />
        <View style={styles.textoContainer}>
          <Text style={styles.nombre}>{nombre}</Text>
          <Text style={styles.categoria}>Categoría: {}</Text>
          <Text style={styles.descripcion}>{descripcion}</Text>
        </View>
        <TouchableOpacity onPress={() => handlePress()}>
          <Ionicons
            name={expandido ? 'chevron-up-outline' : 'chevron-down-outline'}
            size={24}
            color="grey"
            style={styles.icono}
          />
        </TouchableOpacity>
      </View>

      {expandido && (
        <View style={styles.expandido}>
          <View style={styles.contacto}>
            <Text style={styles.contactoTitulo}>Contacto</Text>
            <Text style={styles.categoria}>📞 {telefonoLlamadas}</Text>
            <Text style={styles.categoria}>💬 {telefonoWhatsapp}</Text>
          </View>   

          <View style={styles.botones}>
            <Button title="Aceptar" onPress={() => setModalAceptarVisible(true)} color="#4CAF50" />
            <Button title="Rechazar" onPress={() => setModalRechazoVisible(true)} color="#F44336" />
        </View>
        </View>
      )}
    </View>
    <Modal visible={modalAceptarVisible} transparent animationType="slide">
    <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <Text style={styles.modalTitulo}>¿Estás seguro de aceptar?</Text>
        <View style={styles.botones}>
            <Button title="Sí" onPress={() => {
            console.log('Solicitud aceptada');
            setModalAceptarVisible(false);
            }} />
            <Button title="Cancelar" onPress={() => setModalAceptarVisible(false)} />
        </View>
        </View>
    </View>
    </Modal>
    <Modal visible={modalRechazoVisible} transparent animationType="slide">
    <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <Text style={styles.modalTitulo}>Motivo del rechazo</Text>
        <TextInput
            placeholder="Escribí el motivo..."
            style={styles.input}
            multiline
            numberOfLines={3}
            value={motivoRechazo}
            onChangeText={setMotivoRechazo}
        />
        <View style={styles.botones}>
            <Button title="Enviar" onPress={() => {
            console.log('Solicitud rechazada. Motivo:', motivoRechazo);
            setModalRechazoVisible(false);
            setMotivoRechazo('');
            }} />
            <Button title="Cancelar" onPress={() => setModalRechazoVisible(false)} />
        </View>
        </View>
    </View>
    </Modal>
    </View>
  );
  
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginVertical: 6,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
    contacto: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
  imagen: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  categoria: {
    fontSize: 17,
    color: 'gray',
  },
  descripcion: {
    fontSize: 15,
    color: '#555',
  },
  icono: {
    paddingHorizontal: 8,
  },
  expandido: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  contactoTitulo: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  botones: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    elevation: 5,
  },
  modalTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    textAlignVertical: 'top',
    marginBottom: 10,
  },
  
});

export default LocalCard;
