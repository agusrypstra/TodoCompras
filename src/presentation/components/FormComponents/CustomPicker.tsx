import React from 'react'
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface PickerItem {
    label: string;
    value: string;
  }

interface pickerParams {
    selectedValue: string;
    onValueChange: (value: string) => void;
    items: PickerItem[];
    placeholder: string;
}

const CustomPicker: React.FC<pickerParams> = ({ selectedValue, onValueChange, items, placeholder }) => {
    return (
        <View style={styles.pickerContainer}>
            <Picker
            selectedValue={selectedValue}
            onValueChange={onValueChange}
            style={styles.picker}
            >
            <Picker.Item label={placeholder} value="" color="#999" />
            {items.map((item, index) => (
                <Picker.Item key={index} label={item.label} value={item.value} color="#999"/>
            ))}
            </Picker>
        <Ionicons name="chevron-down" size={20} color="#333" style={styles.icon} />
      </View>
    );
  };

  const styles = StyleSheet.create({
    pickerContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      paddingHorizontal: 10,
      backgroundColor: "#fff",
      width: "100%",
      marginBottom: 15,
    },
    picker: {
      flex: 1,
    },
    icon: {
      position: "absolute",
      right: 10, // Posiciona el icono a la derecha
    },
  });

export default CustomPicker