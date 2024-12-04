import React from 'react'
import { Text } from 'react-native';
import { Pressable } from 'react-native-gesture-handler'

interface props{
    onPress: ()=>void;
    label:string;
}

export const PrimaryButton = ({onPress,label} : props) => {

    return (
    <Pressable onPress={onPress}>
        <Text>
            {label}
        </Text>
    </Pressable>
  )
}
