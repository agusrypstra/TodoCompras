import React from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { PrimaryButton } from '../../components/Buttons/PrimaryButton';

const RestaurantsScreen = () => {
  const restaurants = [
    { id: 1, nombre: "Restaurant Los Pines", direccion: "San Martín 1234" },
    { id: 2, nombre: "La Casa de la Parrilla", direccion: "Belgrano 4567" },
    { id: 3, nombre: "Sabores del Campo", direccion: "Av. Libertad 890" },
    { id: 4, nombre: "Delicias Italianas", direccion: "Italia 2345" },
    { id: 5, nombre: "Mariscos del Puerto", direccion: "Av. Costanera 789" },
    { id: 6, nombre: "Café El Rincón", direccion: "Rivadavia 1011" },
    { id: 7, nombre: "La Trattoria", direccion: "Colón 2222" },
    { id: 8, nombre: "El Buen Sabor", direccion: "Mitre 3333" },
    { id: 9, nombre: "Restaurante Gourmet", direccion: "España 4444" },
    { id: 10, nombre: "Pasta y Vino", direccion: "Av. de Mayo 5555" },
    { id: 11, nombre: "Parrilla Don Pepe", direccion: "Córdoba 6666" },
    { id: 12, nombre: "El Asador Criollo", direccion: "Santa Fe 7777" },
    { id: 13, nombre: "Sushi y Más", direccion: "Av. Japón 888" },
    { id: 14, nombre: "Veggie Delights", direccion: "Paz 9999" },
    { id: 15, nombre: "Tapas y Vinos", direccion: "Alsina 1010" }
  ];
  return (
    <View>
      <Text>RestaurantsScreen</Text>
      <FlatList
        data={restaurants}
        renderItem={({item})=>(
          <PrimaryButton onPress={()=>{}}
          label={item.nombre}
        />)}      
      />
    </View>
  )
}

export default RestaurantsScreen