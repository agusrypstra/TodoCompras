import React from 'react';
import { View ,Text} from 'react-native';
import { solicitudes } from '../../../presentation/api/data';
import SolicitudesContainer from '../../components/Solicitudes/SolicitudesContainer';

const SolicitudesScreen: React.FC = () => {
    
    return (
        <View>
            <Text>Solicitudes</Text>
            {/* Aquí puedes agregar tu lógica y componentes para la pantalla de Solicitudes */}
            <SolicitudesContainer data={solicitudes} />
        </View>
    );
};

export default SolicitudesScreen;