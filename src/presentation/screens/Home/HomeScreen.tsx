import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { Pressable } from 'react-native-gesture-handler'
import { Text } from 'react-native-paper'
import {PrimaryButton} from '../../components/Buttons/PrimaryButton'

const HomeScreen = () => {
  
  const navigation = useNavigation();

  return (
    <View>
        <Text> 
            home screen
        </Text>
        <PrimaryButton 
        onPress={()=> navigation.navigate('About' as never)}
        label="About" />
        <PrimaryButton 
        onPress={()=> navigation.navigate('Merchants' as never)}
        label="Merchants" />
        <PrimaryButton 
        onPress={()=> navigation.navigate('Restaurants' as never)}
        label="Restaurants" />
        <PrimaryButton 
        onPress={()=> navigation.navigate('Trades' as never)}
        label="Trades" />
    </View>
  )
}

export default HomeScreen
