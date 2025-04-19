import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import CardSolicitud from './CardSolicitud';

interface SolicitudesContainerProps {
    data: Array<SolicitudRegistroLocal>; // Cambia 'any' por el tipo específico de tus datos
}

const SolicitudesContainer: React.FC<SolicitudesContainerProps> = ({ data }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {data.map((item, index) => 
            <CardSolicitud
                    key={index}
                    fotoPerfil={item.fotoPerfil}
                    nombre={item.nombre}
                    descripcion={item.descripcion}
                    categoriaId={item.categoriaId}
                    telefonoLlamadas={item.telefonoLlamadas}
                    telefonoWhatsapp={item.telefonoWhatsapp}      
            >
            </CardSolicitud>
        )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16, // Nota: 'gap' no es compatible en React Native, puedes usar margenes en los hijos.
    },
});

export default SolicitudesContainer;