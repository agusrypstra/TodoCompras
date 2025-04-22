import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const HomeRoute = () => <View />;
const SearchRoute = () => <View />;
const ProfileRoute = () => <View />;

const Footer = () => {
  const navigation = useNavigation();

  const [index, setIndex] = React.useState(0);
  const routes = [
    { key: 'home', title: 'Inicio', icon: 'home' },
    { key: 'search', title: 'Buscar', icon: 'magnify' },
    { key: 'profile', title: 'Perfil', icon: 'account' },
  ];

  React.useEffect(() => {
    switch (routes[index].key) {
      case 'home':
        navigation.navigate('Home');
        break;
      case 'search':
        navigation.navigate('Categorias');
        break;
      case 'profile':
        navigation.navigate('Perfil');
        break;
    }
  }, [index]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    search: SearchRoute,
    profile: ProfileRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={styles.footer}
    />
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});

export default Footer;
