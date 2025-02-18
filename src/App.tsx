import React, { StrictMode } from 'react';

import {Header} from './presentation/components/header/header.tsx';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { images, logos } from './assets/categoriesIcons/assets.ts';
import PerfilScreen from './presentation/screens/Perfil/PerfilScreen.tsx';
import FooterComponent from './presentation/components/footer/FooterComponent.tsx';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import RegistroScreen from './presentation/screens/Registro/RegistroScreen.tsx';
import { LoginScreen } from './presentation/screens/Login/LoginScreen.tsx';
const App = () => {
  const description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, impedit perspiciatis ad veniam et eos dolor modi deserunt. Corporis harum ipsam eum aspernatur dolore totam cumque voluptatem nostrum reprehenderit quo.'
  const fotos = new Array();
  fotos.push( images.sec1)
  fotos.push( images.sec2)
  fotos.push( images.sec3)
  return (
    // <StrictMode>
      <GestureHandlerRootView>
        <NavigationContainer>
          <PaperProvider>
            <Header />
              {/* <StackNavigator /> */}

                {/* <RegistroScreen /> */}

                <LoginScreen />

                {/* <PerfilScreen avatar={logos.mecanico}
                        name='Enzo Virgile'
                        background={logos.emprendedores}
                        phoneNumber={5492284556163}
                        message="¡Hola! Estoy interesado en tus servicios."
                        description={description}
                        fotos={fotos}
                        /> */}
            {/* <View style={styles.container}>
                <SearchBar placeholder="Buscar..." onSearch={handleSearch} />
                <CategoryContainer />
            </View> */}
                    {/* <FooterComponent /> */}
            
          </PaperProvider>
        </NavigationContainer>
      </GestureHandlerRootView>
    // </StrictMode>
  );
};

export default App;