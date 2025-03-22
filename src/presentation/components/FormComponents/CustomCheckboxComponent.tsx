import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { CheckBox } from "react-native-elements";

interface CustomCheckboxProps {
  label: string;
  enabled: boolean;
  setEnabled: (value: boolean) => void;
  value?: string;
  setValue?: (value: string) => void;
  placeholder?: string;
}

export const CustomCheckboxComponent: React.FC<CustomCheckboxProps> = ({
  label,
  enabled,
  setEnabled,
  value = "",  // Parámetro por defecto
  setValue = () => {},  // Función vacía por defecto
  placeholder = "",  // Valor por defecto
}) => {
  return (
    <>
      <View style={styles.checkboxContainer}>
        <CheckBox
          title={label}
          checked={enabled}
          onPress={() => setEnabled(!enabled)}
          checkedColor="#0066CC"
          uncheckedColor="#ccc"
        />
      </View>
      {enabled && (
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={setValue}
          placeholder={placeholder}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    textAlign: "center",
  },
});

export default CustomCheckboxComponent;
