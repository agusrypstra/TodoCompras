import React from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { PrimaryButton } from '../../components/Buttons/PrimaryButton';
import {type NavigationProp, useNavigation } from '@react-navigation/native';
import { restaurantsData } from '../../api/restaurantsApi'
import { RootStackParams } from 'src/presentation/interfaces/RootStackParams';



const RestaurantsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <View>
      <Text>RestaurantsScreen</Text>
      <FlatList
        data={restaurantsData}
        renderItem={({item})=>(
          <PrimaryButton onPress={()=> navigation.navigate('Restaurant',item)}
          label={item.nombre}
        />)}      
      />
    </View>
  )
}

export default RestaurantsScreen