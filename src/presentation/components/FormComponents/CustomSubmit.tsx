import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  StyleSheet,
} from "react-native";

interface SubmitButtonProps {
  onPress: () => void;
  disabled?: boolean;
}

const CustomSubmit: React.FC<SubmitButtonProps> = ({ onPress, disabled }) => {
  const [aceptoTerminos, setAceptoTerminos] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
      {/* Selector de términos */}
        <TouchableOpacity
          style={[styles.selectableBox, aceptoTerminos && styles.selected]}
          onPress={() => setAceptoTerminos(!aceptoTerminos)}
        >
          <Text style={[styles.selectableText, aceptoTerminos && styles.selectedText]}>
            {aceptoTerminos ? "✓" : ""} 
          </Text>
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>
          Acepto los{" "}
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.linkText}>términos y condiciones</Text>
          </TouchableOpacity>
        </Text>
      </View>

      {/* Botón de enviar */}
      <TouchableOpacity
        disabled={!aceptoTerminos || disabled}
        style={[
          styles.submitButton,
          (!aceptoTerminos || disabled) && styles.disabledButton,
        ]}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      {/* Modal de términos y condiciones */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Términos y Condiciones</Text>
            <ScrollView style={styles.modalScroll}>
              <Text style={styles.modalText}>
                Aquí van los términos y condiciones detallados. Puedes escribir
                todo el texto que desees.
              </Text>
            </ScrollView>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
    display:'flex',
    flexDirection:'column'
  },
  flexRow:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  },
  selectableBox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
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
  checkboxLabel: {
    fontSize: 14,
    marginLeft: 5,
  },
  linkText: {
    color: "blue",
    textDecorationLine: "underline",
  },
  submitButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  disabledButton: {
    backgroundColor: "#cccccc",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalScroll: {
    maxHeight: 200,
  },
  modalText: {
    fontSize: 14,
  },
  closeButton: {
    backgroundColor: "#007bff",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default CustomSubmit;
