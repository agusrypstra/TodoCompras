import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

interface BannerCategoryProps {
  handlePress: (id: number) => void;
  id: number;
  nombre: string;
}

const BannerCategory: React.FC<BannerCategoryProps> = ({ handlePress, id, nombre }) => {
  return (
    <TouchableOpacity onPress={() => handlePress(id)}>
      <View>
        <Text>{nombre}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BannerCategory;