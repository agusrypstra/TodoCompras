import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import NotificationComponent from "../../components/Notifications/NotificationComponent";

interface NotificationProp {
    id:number;
    message: string;
}

export const NotificationScreen: React.FC = () => {

    const notificaciones: NotificationProp[] = useState([
        { id: 1, message: "Tu pedido ha sido enviado" },
        { id: 2, message: "Tu pedido ha sido entregado" },
        { id: 3, message: "Tu pedido ha sido cancelado" },
        { id: 3, message: "Tu pedido ha sido cancelado" },
        { id: 3, message: "Tu pedido ha sido cancelado" },
        { id: 3, message: "Tu pedido ha sido cancelado" },
        { id: 3, message: "Tu pedido ha sido cancelado" },
        { id: 3, message: "Tu pedido ha sido cancelado" },
        { id: 3, message: "Tu pedido ha sido cancelado" },
        { id: 3, message: "Tu pedido ha sido cancelado" },
        { id: 3, message: "Tu pedido ha sido cancelado" },
        { id: 3, message: "Tu pedido ha sido cancelado" },
        { id: 3, message: "Tu pedido ha sido cancelado" },
        { id: 3, message: "Tu pedido ha sido cancelado" },
        { id: 3, message: "Tu pedido ha sido cancelado" },
        { id: 3, message: "Tu pedido ha sido cancelado" },
    ])[0];

  return (
    <ScrollView style={styles.container}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginVertical: 20,textAlign: "center" }}>
            Notificaciones
        </Text>
        {notificaciones.length > 0 ? (
            notificaciones.map((notification: NotificationProp) => (
            <NotificationComponent id={notification.id} message={notification.message}/>

            ))
        ) : (
            <Text style={{ fontSize: 18, color: "#888" }}>No hay notificaciones</Text>
        )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
},

});

