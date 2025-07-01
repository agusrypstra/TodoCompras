import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import NotificationComponent from "../../components/Notifications/NotificationComponent";

interface Notification {
  id: number;
  title: string;
  description: string;
  isRead?: boolean;
  date?: string;
}

export const NotificationScreen: React.FC = () => {

    const notificaciones: Notification[] = useState([
  {
    id: 1,
    title: "🎉 ¡Gran Apertura en Café Aromas!",
    description: "Disfruta un 30% de descuento en todos nuestros cafés especiales esta semana. ¡Ven y prueba nuestro nuevo blend premium!",
    date: "Hoy"
  },
  {
    id: 2,
    title: "👗 ¡Locura de Verano en Moda Express!",
    description: "2x1 en toda la colección de verano. ¡Actualiza tu guardarropa con las últimas tendencias! Oferta válida hasta agotar existencias.",
    date: "Ayer"
  },
  {
    id: 3,
    title: "🍕 Noche de Pizza Gratis",
    description: "En Pizzas Don Carlos, cada 3 pizzas familiares te regalamos la 4ta. ¡Reúne a tus amigos y disfruta!",
    date: "Hace 2 días"
  },
  {
    id: 4,
    title: "💎 ¡Oferta Relámpago en Joyería Luz!",
    description: "50% de descuento en anillos de plata este viernes negro. ¡Solo hasta medianoche!",
    isRead: true
  },
  {
    id: 5,
    title: "📱 ¡Actualiza tu Tech!",
    description: "En TecnoShop: Financiamiento 0% interés en smartphones de última generación por 12 meses. ¡No dejes pasar esta oportunidad!",
    date: "Esta semana"
  },
  {
    id: 6,
    title: "🍰 ¡Dulce Fin de Mes!",
    description: "En Pastelería Glamour: 3 mini tortas gourmet por solo $15.000. ¡Perfectas para compartir!",
    date: "Hoy"
  },
  {
    id: 7,
    title: "🏋️‍♂️ ¡Transforma tu Cuerpo!",
    description: "Gym Power te ofrece 1 mes gratis + evaluación nutricional sin costo al inscribirte este mes. ¡Tu mejor versión te espera!",
    date: "Promoción vigente"
  },
  {
    id: 8,
    title: "📚 ¡Ilumina tu Mente!",
    description: "Librería Saber: 40% de descuento en todos los libros de desarrollo personal + café gratuito mientras lees en nuestro lounge.",
    date: "Todo enero"
  }
])[0];

  return (
    <ScrollView style={styles.container}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginVertical: 20,textAlign: "center" }}>
            Notificaciones
        </Text>
        {notificaciones.length > 0 ? (
            notificaciones.map((notification: Notification) => (
            <NotificationComponent id={notification.id} title={notification.title} description={notification.description} date={notification.date}/>

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

