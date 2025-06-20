// import React from 'react'
// import { Picker } from '@react-native-picker/picker';
// import { StyleSheet, View } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { OpcionPicker } from 'src/presentation/screens/RegistroLocal/RegistroLocal';

// interface PickerItem {
//     label: string;
//     value: string;
//   }

// interface pickerParams {
//     selectedValue: OpcionPicker;
//     onValueChange: (label:string,value:number) => void;
//     items: PickerItem[];
//     placeholder: string;
//     loading?: boolean;
// }

// const CustomPicker: React.FC<pickerParams> = ({ selectedValue, onValueChange, items, placeholder }) => {
//     return (
//         <View style={styles.pickerContainer}>
//             <Picker
//             selectedValue={selectedValue.value}
//             onValueChange={onValueChange}
//             style={styles.picker}
//             >
//             <Picker.Item label={placeholder} value="" color="#999" />
//             {items.map((item, index) => (
//                 <Picker.Item key={index} label={item.label} value={item.value} color="#999"/>
//             ))}
//             </Picker>
//         <Ionicons name="chevron-down" size={20} color="#333" style={styles.icon} />
//       </View>
//     );
//   };

//   const styles = StyleSheet.create({
//     pickerContainer: {
//       flexDirection: "row",
//       alignItems: "center",
//       borderWidth: 1,
//       borderColor: "#ccc",
//       borderRadius: 5,
//       paddingHorizontal: 10,
//       backgroundColor: "#fff",
//       width: "100%",
//       marginBottom: 15,
//     },
//     picker: {
//       flex: 1,
//     },
//     icon: {
//       position: "absolute",
//       right: 10, // Posiciona el icono a la derecha
//     },
//   });

// export default CustomPicker

import React from 'react';
import { Picker, PickerProps } from '@react-native-picker/picker';
import { StyleSheet, View, TextStyle, ViewStyle } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export interface PickerItem {
  label: string;
  value: string | number;
}

interface CustomPickerProps {
  selectedValue: string | number;
  onValueChange: (value: string | number, index?: number) => void;
  items: PickerItem[];
  placeholder?: string;
  disabled?: boolean;
  style?: ViewStyle;
  pickerStyle?: TextStyle;
  iconColor?: string;
  iconName?: string;
  iconSize?: number;
  testID?: string;
}

const CustomPicker: React.FC<CustomPickerProps> = ({
  selectedValue,
  onValueChange,
  items,
  placeholder = 'Seleccione una opción',
  disabled = false,
  style,
  pickerStyle,
  iconColor = '#333',
  iconName = 'chevron-down',
  iconSize = 20,
  testID,
}) => {
  return (
    <View style={[styles.pickerContainer, style]} testID={testID}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={[styles.picker, pickerStyle]}
        enabled={!disabled}
        dropdownIconColor={iconColor}
        mode="dropdown" // o 'dialog' según prefieras
      >
        <Picker.Item label={placeholder} value="" enabled={false} />
        {items.map((item, index) => (
          <Picker.Item
            key={`${item.value}-${index}`}
            label={item.label}
            value={item.value}
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 15,
    position: 'relative',
  },
  picker: {
    flex: 1,
    height: 50, // Altura fija para mejor consistencia
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
});

export default CustomPicker;