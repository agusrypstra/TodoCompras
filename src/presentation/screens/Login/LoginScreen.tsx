import React, { useState } from 'react'
import { StyleSheet,ScrollView, View } from 'react-native'
import CustomTextInput from '../../components/FormComponents/CustomTextInput'

export const LoginScreen: React.FC= () => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    
    return (
    <View style={styles.container}>
        <View style={styles.formContainer}>
            <CustomTextInput onChangeText={setEmail} placeholder='Ingrese su email' value={Email}/>
            <CustomTextInput onChangeText={setPassword} placeholder='Ingrese su contraseña' value={Password}/>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding:30
  },
  formContainer:{
    width:'75%',
    alignItems:'center'
  },
})
