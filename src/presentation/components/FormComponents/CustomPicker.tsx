import React from 'react'
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { OpcionPicker } from 'src/presentation/screens/RegistroLocal/RegistroLocal';

interface pickerParams {
  selectedValue: string;
  onValueChange: (value: string) => void;
  items: OpcionPicker[];
  placeholder: string;
  loading?: boolean;
}

const CustomPicker: React.FC<pickerParams> = ({ selectedValue, onValueChange, items, placeholder, loading = false }) => {
  const isDisabled = loading || items.length === 0;

  return (
    <View style={[styles.pickerContainer, isDisabled && styles.pickerDisabled]}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        enabled={!isDisabled}
        style={styles.picker}
      >
        <Picker.Item
          label={loading ? 'Cargando...' : placeholder}
          value=""
          color="#999"
        />
        {!loading &&
          items.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} color="#333" />
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
    pickerDisabled: {
      backgroundColor: '#f2f2f2',
    }
  });

export default CustomPicker