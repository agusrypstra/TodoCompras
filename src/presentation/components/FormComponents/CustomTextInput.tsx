import React from 'react'
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native'

interface CustomInputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    keyboardType?: KeyboardTypeOptions; // Permite solo valores válidos para keyboardType
  }

export const CustomTextInput: React.FC<CustomInputProps>  = (
    {value ,onChangeText,placeholder,keyboardType="default"}
) => {
  return (
    <>
    <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText} // Llama a la función del padre
        keyboardType={keyboardType}
        />
    </>
  )
}
const styles = StyleSheet.create({
    input: {
        width: '80%',
        
        marginBottom: 15,
        paddingVertical: 15,
        backgroundColor: '#fff',
        textAlign: 'center',
      },
    })

export default CustomTextInput;