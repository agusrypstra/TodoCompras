import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CustomTextInput from "../../components/FormComponents/CustomTextInput";
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined; // Home no recibe parámetros
  Registro: undefined; // Home no recibe parámetros
  Home: undefined; // Home no recibe parámetros
};

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const LoginScreen: React.FC<LoginScreenProps> = ({navigation} :LoginScreenProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (!email || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }
    if (!validateEmail(email)) {
      setError("Ingrese un email válido");
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    setError("");
    console.log("Email:", email);
    console.log("Password:", password);
    navigation.navigate('Home')    
  };

  const registerButton = ()=>{
    navigation.navigate("Registro")
  }
  const invitadoButton = ()=>{
    navigation.navigate("Home")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <CustomTextInput
        onChangeText={setEmail}
        placeholder="Ingrese su email"
        value={email}
        keyboardType="email-address"
      />

      <CustomTextInput
        onChangeText={setPassword}
        placeholder="Ingrese su contraseña"
        value={password}
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log("Recuperar contraseña")}>
        <Text style={styles.forgotPassword}>¿Olvidó su contraseña?</Text>
      </TouchableOpacity>


      <TouchableOpacity>
        <Text style={styles.registerText} >
          ¿No tienes una cuenta? <Text onPress={registerButton} style={styles.registerLink}>Regístrate</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.registerText} >
          O ingresa como <Text onPress={invitadoButton} style={styles.registerLink}>invitado.</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 30,
    height: "75%",
    justifyContent: "center",
    gap: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  submit:{
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  disabledButton: {
    backgroundColor: "#cccccc"
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 5,
  },
  forgotPassword: {
    color: "#007bff",
    fontSize: 14,
    marginVertical: 5,
  },
  registerText: {
    fontSize: 14,
    marginTop: 10,
  },
  registerLink: {
    color: "#007bff",
    fontWeight: "bold",
  },
});

