import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const RegistroScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Usuario</Text>
      <Text style={styles.subtitle}>¡Bienvenido! Por favor, completa el formulario para registrarte.</Text>
      {/* Aquí irían los campos del formulario de registro */}
    </View>
  );
}
export default RegistroScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },
    });