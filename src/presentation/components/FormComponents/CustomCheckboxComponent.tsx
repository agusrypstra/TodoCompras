import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Checkbox } from 'react-native-paper'

interface CustomCheckboxProps{
    label: string;
    enabled: boolean;
    setEnabled: (value: boolean)=>void;
    value?:string;
    setValue?:(value:string)=>void;
    placeholder?:string;
}

export const CustomCheckboxComponent: React.FC<CustomCheckboxProps> = (
    {
        label,
        enabled,
        setEnabled,
        value,
        setValue,
        placeholder,
      }
) => {
  return (
    <>
    <View style={styles.checkboxContainer}>
            <Checkbox.Android
              status={enabled ? 'checked' : 'unchecked'}
              onPress={() => setEnabled(!enabled)}
            />
            <Text style={styles.checkboxLabel}>{label}</Text>
          </View>
          {enabled && (
            <>
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={setValue}
              placeholder={placeholder}
            />
            {/* <Text style={styles.helperText}>{placeholder}</Text> */}

            </>
          )}
    </>
  )
}
const styles = StyleSheet.create({
    checkboxLabel: {
        marginLeft: 8,
        fontSize: 16,
      },
      input: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
        textAlign: 'center',
      },
      checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      helperText:{
        fontSize: 15,
        marginBottom: 10
      },
    })

export default CustomCheckboxComponent