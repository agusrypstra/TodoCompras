import { RouteProp, useRoute } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { PrimaryButton } from '../../components/Buttons/PrimaryButton'
import { RootStackParams } from 'src/presentation/interfaces/RootStackParams'


export const RestaurantScreen = () => {
    const params = useRoute<RouteProp<RootStackParams,'Restaurant'>>().params;
    
  return (
    <View>
      <Text>Nombre:</Text>
      <Text>{params.nombre}</Text>
      <Text>Direccion</Text>
      <Text>{params.direccion}</Text>
      <Text>Telefono</Text>
      <Text>{params.telefonos}</Text>
      <FlatList
        data={params.productos}
        renderItem={({item})=>(
          <PrimaryButton onPress={()=> {console.log(item.nombre)}}
          label={item.nombre}
        />)}
        />  
    </View>
  )
}
