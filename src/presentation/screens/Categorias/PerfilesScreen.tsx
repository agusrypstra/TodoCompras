import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from 'src/presentation/routes/StackNavigator';



interface PerfilesScreenProps {
  route: RouteProp<RootStackParamList, 'Perfiles'>;
}

const PerfilesScreen: React.FC<PerfilesScreenProps> = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Perfiles'>>();
  const { subcategoriaId } = route.params;


  return (
    <View style={styles.container}>
      <Text>Perfiles de la subcategoría: {subcategoriaId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PerfilesScreen;