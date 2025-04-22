import React, { useEffect, useState } from 'react';
import { View ,Text, Alert} from 'react-native';
import { solicitudes } from '../../../presentation/api/data';
import SolicitudesContainer from '../../components/Solicitudes/SolicitudesContainer';
import axios from 'axios';

const SolicitudesScreen: React.FC = () => {
    const [Solicitudes, setSolicitudes] = useState<SolicitudRegistroLocal[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get<SolicitudRegistroLocal[]>('http://10.0.2.2:8080/api/solicitudes')
          .then(response => {
            setSolicitudes(response.data);
            setLoading(false);
          })
          .catch(error => {
            Alert.alert('Error', 'No se pudieron cargar las solicitudes.\nCódigo de error: ' + error);
            setLoading(false);
            setError(error);
          });
      }, []);
    

    return (
        <View>
            <Text>Solicitudes</Text>
            {/* Aquí puedes agregar tu lógica y componentes para la pantalla de Solicitudes */}
            <SolicitudesContainer data={Solicitudes} />
        </View>
    );
};

export default SolicitudesScreen;