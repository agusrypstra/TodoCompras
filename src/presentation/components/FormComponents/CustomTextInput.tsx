import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface CustomInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}

export const CustomTextInput: React.FC<CustomInputProps> = ({
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  secureTextEntry = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TextInput
          style={[styles.input, isFocused && styles.inputFocused]}
          placeholder={placeholder}
          placeholderTextColor="#888"
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    color:'#333',
    width: '100%',
    marginBottom: 15,
    paddingVertical: 15,
    backgroundColor: '#fff',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  inputFocused: {
    borderColor: '#007bff', // Cambia el borde cuando está enfocado
    borderWidth: 2,
  },
});

export default CustomTextInput;
