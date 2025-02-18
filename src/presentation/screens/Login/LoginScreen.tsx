import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CustomTextInput from "../../components/FormComponents/CustomTextInput";
import CustomSubmit from "../../../presentation/components/FormComponents/CustomSubmit";

export const LoginScreen: React.FC = () => {
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
  };

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

      <TouchableOpacity onPress={() => console.log("Recuperar contraseña")}>
        <Text style={styles.forgotPassword}>¿Olvidó su contraseña?</Text>
      </TouchableOpacity>

      <CustomSubmit onPress={handleSubmit} />

      <TouchableOpacity onPress={() => console.log("Ir a registro")}>
        <Text style={styles.registerText}>
          ¿No tienes una cuenta? <Text style={styles.registerLink}>Regístrate</Text>
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
    gap: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
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

