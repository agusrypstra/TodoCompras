import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface DescriptionProps {
  description: string[];
}

const DescriptionComponent: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.title}>Descripción</Text>
      {description.map((item, index) => (
        <Text key={`${item}_${index}`} style={styles.specialty}>
          • {item}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    textAlign: 'center',
    backgroundColor: '#FFF',
    padding: 30,
    textAlignVertical: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 5,
  },
  description: {
    textAlign: 'center',
    fontSize: 28,
    color: '#666',
    marginBottom: 10,
  },
  specialty: {
    fontSize: 22,
    marginBottom: 5,
    color: '#333',
  },
});

export default DescriptionComponent;
