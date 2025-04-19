import React from 'react';
import { View, StyleSheet } from 'react-native';
import ElementItem from './CategoriaItem';
import { gridElement } from 'src/presentation/api/data';

interface DisplayGridProps<T extends gridElement> {
  elementos: T[];
  onPress: (id: number) => void;
}

const DisplayGrid = <T extends gridElement>({
  elementos,
  onPress,
}: DisplayGridProps<T>) => {
  return (
    <View style={styles.grid}>
      {elementos.map((elemento) => (
        <ElementItem
          key={elemento.id}
          id={elemento.id}
          nombre={elemento.nombre}
          imagen={elemento.imagen}
          onPress={() => {
            console.log(elemento.id)
            onPress(elemento.id)}
          }
        />
      ))}
    </View>
  );
};


const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default DisplayGrid;
