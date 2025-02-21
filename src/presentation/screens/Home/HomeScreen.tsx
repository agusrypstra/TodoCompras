import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type RootStackParamList = {
  Login: undefined; // Home no recibe parámetros
  Registro: undefined; // Home no recibe parámetros
  Home: undefined; // Home no recibe parámetros
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;


export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}: HomeScreenProps) => {

  return (
    <View>
        <Text> 
            home screen
        </Text>
    </View>
  )
}

export default HomeScreen
