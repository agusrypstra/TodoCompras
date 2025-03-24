import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

interface CustomSelectableProps {
  label: string;
  selected: boolean;
  setSelected: (value: boolean) => void;
  value?: string;
  setValue?: (value: string) => void;
  placeholder?: string;
}

export const CustomCheckboxComponent: React.FC<CustomSelectableProps> = ({
  label,
  selected,
  setSelected,
  value = "",
  setValue = () => {},
  placeholder = "",
}) => {
  return (
    <View style={styles.container}>
      {/* Checkbox + Label */}
      <TouchableOpacity
        style={[styles.selectableBox, selected && styles.selected]}
        onPress={() => setSelected(!selected)}
      >
        <Text style={[styles.selectableText, selected && styles.selectedText]}>
          {selected ? "✓" : ""}
        </Text>
      </TouchableOpacity>

      <Text style={styles.label}>{label}</Text>

      {/* Input habilitado/deshabilitado */}
      <TextInput
        style={[styles.input, !selected && styles.disabledInput]}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        editable={selected}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  selectableBox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  selected: {
    backgroundColor: "#007bff",
    borderColor: "#005bb5",
  },
  selectableText: {
    fontSize: 16,
    color: "transparent",
  },
  selectedText: {
    color: "white",
  },
  label: {
    fontSize: 16,
    color: "#333",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#fff",
    textAlign: "center",
    padding: 10,
  },
  disabledInput: {
    backgroundColor: "#f0f0f0",
    color: "#999",
  },
});

export default CustomCheckboxComponent;
