import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView, Alert, TouchableOpacity, Switch, Modal } from 'react-native';
import { Checkbox, Icon } from 'react-native-paper'; // Importamos Checkbox de react-native-paper
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import {CustomCheckboxComponent} from '../../components/FormComponents/CustomCheckboxComponent';
import CustomTextInput from '../../components/FormComponents/CustomTextInput';
import CustomSubmit from '../../components/FormComponents/CustomSubmit';
import CustomPicker from '../../../presentation/components/FormComponents/CustomPicker';
// import RNPickerSelect from 'react-native-picker-select'; 

interface Provincia {
  id: string;
  nombre: string;
}

interface Localidad {
  id: string;
  nombre: string;
}

interface OpcionPicker {
  label: string;
  value: string;
}

type Categoria = {
  id: number;
  nombre: string;
};


const RegistroLocal: React.FC = () => {
  const user_id = 1;
  const [nombreComercial, setNombreComercial] = useState<string>('');
  const [numeroContacto, setNumeroContacto] = useState<string>('');
  const [numeroWhatsapp, setNumeroWhatsapp] = useState<string>('');
  const [descripcion, setDescripcion] = useState<string>('');
  const [direccion, setDireccion] = useState<string>('');
  const [provincias, setProvincias] = useState<OpcionPicker[]>([]);
  const [localidades, setLocalidades] = useState<OpcionPicker[]>([]);
  const [provinciaSeleccionada, setProvinciaSeleccionada] = useState("");
  const [localidadSeleccionada, setLocalidadSeleccionada] = useState("");
  const [ubicacionGoogleMaps, setUbicacion] = useState("");

  const [categoriasDisponibles, setCategoriasDisponibles] = useState<OpcionPicker[]>([]);
  const [categoriaPadreSeleccionada, setCategoriaPadreSeleccionada] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  
  const [horaInicio, setHoraInicio] = useState<string>('08');
  const [minutoInicio, setMinutoInicio] = useState<string>('00');
  const [horaFin, setHoraFin] = useState<string>('16');
  const [minutoFin, setMinutoFin] = useState<string>('00');
  const [diaInicio, setDiaInicio] = useState<string>('Lunes');
  const [diaFin, setDiaFin] = useState<string>('Viernes');
  const [servicio24Horas, setServicio24Horas] = useState<boolean>(false);
  
  const [instagramHabilitado, setInstagramHabilitado] = useState<boolean>(false);
  const [instagram, setInstagram] = useState<string>('');
  const [facebookHabilitado, setFacebookHabilitado] = useState<boolean>(false);
  const [facebook, setFacebook] = useState<string>('');
  const [webpageHabilitado, setWebpageHabilitado] = useState<boolean>(false);
  const [webpage, setWebpage] = useState<string>('');
  const [fotoPerfil, setFotoPerfil] = useState("");
  const [fotoBanner, setFotoBanner] = useState("");

  useEffect(() => {
    // Cargar provincias al iniciar el componente

    axios.get<{ provincias: Provincia[] }>('https://apis.datos.gob.ar/georef/api/provincias')
      .then(response => {
        const provinciasData = response.data.provincias
          .map((prov: Provincia) => ({
            label: prov.nombre,
            value: prov.id
          }))
          .sort((a, b) => a.label.localeCompare(b.label)); // Ordenar alfabéticamente
  
        setProvincias(provinciasData);
      })
      .catch(error => {
        Alert.alert('Error', 'No se pudieron cargar las provincias.' + 'Codigo de error: ' + error);
      });

      axios.get('http://10.0.2.2:8080/api/categorias/padres')
      .then(res => {
      const opciones = res.data.map((categoria: { nombre: string; id: number; }) => ({
        label: categoria.nombre,
        value: categoria.id,
      }));
      setCategoriasDisponibles(opciones);
    })
    .catch(err => console.error(err));

  }, []);


  
  useEffect(() => {
    if (provinciaSeleccionada) {
      axios.get<{ localidades: Localidad[] }>(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${provinciaSeleccionada}&campos=id,nombre&max=5000`)
        .then(response => {
          const localidadesData = response.data.localidades
            .map((loc: Localidad) => ({
              label: loc.nombre,
              value: loc.id
            }))
            .sort((a, b) => a.label.localeCompare(b.label)); // Ordenar alfabéticamente
  
          setLocalidades(localidadesData);
        })
        .catch(error => {
          Alert.alert('Error', 'No se pudieron cargar las localidades.');
        });
    }
  }, [provinciaSeleccionada]);
  
  useEffect(() => {
    if (categoriaPadreSeleccionada) {
      axios.get<Categoria[]>(`http://10.0.2.2:8080/api/categorias/${categoriaPadreSeleccionada}`)
        .then(response => {
          const categoriasData: OpcionPicker[] = response.data
          .map((cat) => ({
            label: cat.nombre,
            value: String(cat.id)  // 👈 acá la magia
          }))
          .sort((a, b) => a.label.localeCompare(b.label));

        setCategoriasDisponibles(categoriasData);
        })
        .catch(error => {
    Alert.alert('Error', 'No se pudieron cargar las categorías.' + error);
  });
    }
  }, [categoriaPadreSeleccionada]);
  
  const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  const validarFormulario = () => {
    if (!nombreComercial.trim()) {
      Alert.alert('Error', 'El nombre comercial es obligatorio.');
      return false;
    }
    if (!numeroContacto.trim() || !/^\d+$/.test(numeroContacto)) {
      Alert.alert('Error', 'El número de contacto debe contener solo números.');
      return false;
    }
    if (!numeroWhatsapp.trim() || !/^\d+$/.test(numeroWhatsapp)) {
      Alert.alert('Error', 'El número de WhatsApp debe contener solo números.');
      return false;
    }
    if (!categoriaSeleccionada.trim()) {
      Alert.alert('Error', 'La categoría es obligatoria.');
      return false;
    }

    // Validar que el horario de inicio no sea mayor que el horario de fin (si no es 24 horas)
    if (!servicio24Horas) {
      const inicio = parseInt(horaInicio + minutoInicio, 10);
      const fin = parseInt(horaFin + minutoFin, 10);
      if (inicio >= fin) {
        Alert.alert('Error', 'El horario de inicio debe ser menor que el horario de fin.');
        return false;
      }
    }

    // Validar redes sociales si están habilitadas
    if (instagramHabilitado && !instagram.trim()) {
      Alert.alert('Error', 'El campo de Instagram es obligatorio.');
      return false;
    }
    if (facebookHabilitado && !facebook.trim()) {
      Alert.alert('Error', 'El campo de Facebook es obligatorio.');
      return false;
    }
    if (webpageHabilitado && !webpage.trim()) {
      Alert.alert('Error', 'El campo de Página Web es obligatorio.');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validarFormulario()) {
      return;
    }

    const horarioAtencion = servicio24Horas
      ? '24 horas'
      : `${horaInicio.padStart(2, '0')}:${minutoInicio.padStart(2, '0')} - ${horaFin.padStart(2, '0')}:${minutoFin.padStart(2, '0')}`;

    const diasAtencion = servicio24Horas
      ? 'Todos los días'
      : `${diaInicio} a ${diaFin}`;

    const formData = {
        "usuarioId": 1,
        "categoriaId":categoriaSeleccionada,
        "nombre": nombreComercial,
        "provincia": provinciaSeleccionada,
        "localidad": localidadSeleccionada,
        "direccion": direccion,
        "telefonoLlamadas": numeroContacto,
        "telefonoWhatsapp": numeroWhatsapp,
        "descripcion": descripcion ? descripcion : null,
        "diasAtencionDesde": diaInicio,
        "diasAtencionHasta": diaFin,
        "horarioAtencionDesde": horaInicio,
        "horarioAtencionHasta": horaFin,
        "es24Horas": servicio24Horas,
        "ubicacionGoogleMaps": ubicacionGoogleMaps ? ubicacionGoogleMaps : null,
        "linkInstagram": instagramHabilitado ? instagram : null,
        "linkFacebook": facebookHabilitado ? facebook : null,
        "linkPaginaWeb": webpageHabilitado ? webpage : null,
        "fotoPerfil": fotoPerfil,
        "fotoBanner": fotoBanner
    };
    console.log('Datos del formulario:', formData);
    Alert.alert('Éxito', 'Formulario enviado correctamente.');
  };

  const generarOpciones = (inicio: number, fin: number) => {
    const opciones = [];
    for (let i = inicio; i <= fin; i++) {
      opciones.push(i.toString().padStart(2, '0'));
    }
    return opciones;
  };

  const horas = generarOpciones(0, 23);
  const minutos = generarOpciones(0, 59);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>¡Registra tu negocio!</Text>

        {/* <TextInput style={styles.input} value={nombreApellido} onChangeText={setNombreApellido} placeholder="Nombre y Apellido *"/> */}
        <CustomTextInput value={nombreComercial} onChangeText={setNombreComercial} placeholder="Nombre Comercial *"/>
        <CustomTextInput value={numeroContacto} onChangeText={setNumeroContacto} placeholder="Número de Contacto *"/>
        <CustomTextInput value={direccion} onChangeText={setDireccion} placeholder="Direccion" />

        <CustomTextInput value={numeroWhatsapp} onChangeText={setNumeroWhatsapp} placeholder="Número de WhatsApp" keyboardType="phone-pad"/>

        <CustomPicker selectedValue={provinciaSeleccionada} items={provincias} onValueChange={setProvinciaSeleccionada} placeholder='Seleccionar provincia'/>

          {provinciaSeleccionada ? (
            <CustomPicker selectedValue={localidadSeleccionada} items={localidades} onValueChange={setLocalidadSeleccionada} placeholder='Seleccionar localidad'/>
          ) : null}



  
        <CustomPicker items={categoriasDisponibles} selectedValue={''} onValueChange={setCategoriaPadreSeleccionada} placeholder={'Categoria'}



        />
        <TextInput placeholderTextColor={'#999'} style={styles.textArea} value={descripcion} onChangeText={setDescripcion} placeholder="Da una reseña sobre tu negocio para hacerle saber a los usuarios cuáles son los servicios que prestas." multiline />
        <View style={styles.switchContainer}>
        <Text style={styles.label}>Servicio 24 horas</Text>
          <Switch
            value={servicio24Horas}
            onValueChange={(value) => setServicio24Horas(value)}
          />
          <Text style={styles.switchText}>{servicio24Horas ? 'Sí' : 'No'}</Text>
        </View>

        {!servicio24Horas && (
          <>
            <Text style={styles.label}>Horario de Atención *</Text>
            <View style={styles.horarioContainer}>
              <View style={styles.horarioItem}>
                <Text style={styles.timeText}>Desde</Text>
                <Picker selectedValue={horaInicio} onValueChange={(itemValue: string) => setHoraInicio(itemValue)} style={styles.hourPicker}>
                  {horas.map((hora) => (
                    <Picker.Item key={hora} label={hora} value={hora} />
                  ))}
                </Picker>
                <Text style={styles.timeText}>:</Text>
                <Picker selectedValue={minutoInicio} onValueChange={(itemValue: string) => setMinutoInicio(itemValue)} style={styles.hourPicker}>
                  {minutos.map((minuto) => (
                    <Picker.Item key={minuto} label={minuto} value={minuto} />
                  ))}
                </Picker>
              </View>
              <View style={styles.horarioItem}>
                <Text style={styles.timeText}>Hasta</Text>
                <Picker selectedValue={horaFin} onValueChange={(itemValue: string) => setHoraFin(itemValue)} style={styles.hourPicker}>
                  {horas.map((hora) => (
                    <Picker.Item key={hora} label={hora} value={hora} />
                  ))}
                </Picker>
                <Text style={styles.timeText}>:</Text>
                <Picker selectedValue={minutoFin} onValueChange={(itemValue: string) => setMinutoFin(itemValue)} style={styles.hourPicker}>
                  {minutos.map((minuto) => (
                    <Picker.Item key={minuto} label={minuto} value={minuto} />
                  ))}
                </Picker>
              </View>
            </View>

            <Text style={styles.label}>Días de Atención *</Text>
            <View style={styles.diasContainer}>
              <Picker selectedValue={diaInicio} onValueChange={(itemValue: string) => setDiaInicio(itemValue)} style={styles.diaPicker}>
                {diasSemana.map((dia) => (
                  <Picker.Item key={dia} label={dia} value={dia} />
                ))}
              </Picker>
              <Text style={styles.separador}>a</Text>
              <Picker selectedValue={diaFin} onValueChange={(itemValue: string) => setDiaFin(itemValue)} style={styles.diaPicker}>
                {diasSemana.map((dia) => (
                  <Picker.Item key={dia} label={dia} value={dia} />
                ))}
              </Picker>
            </View>
          </>
        )}
          <Text style={styles.label}>Redes Sociales</Text>
        <View style={styles.redesContainer}>
          <CustomCheckboxComponent
            label='Instagram'
            selected={instagramHabilitado} 
            setSelected={setInstagramHabilitado} 
            value={instagram}
            setValue={setInstagram} 
            placeholder="Ejemplo: https://www.instagram.com/tuusuario"
          /> 
          <CustomCheckboxComponent
            label='Facebook'
            selected={facebookHabilitado} 
            setSelected={setFacebookHabilitado} 
            value={facebook}
            setValue={setFacebook} 
            placeholder="Ejemplo: https://www.facebook.com/tuusuario"
          /> 
          <CustomCheckboxComponent
            label='Webpage'
            selected={webpageHabilitado} 
            setSelected={setWebpageHabilitado} 
            value={webpage}
            setValue={setWebpage} 
            placeholder="Ejemplo: https://www.tupaginaweb.com/"
          /> 
        </View>

        <CustomSubmit onPress={handleSubmit} />
        </View>
    </ScrollView>
  );
};

const pickerStyles = StyleSheet.create({
  inputAndroid: {
    
  },
  placeholder: {
    color: '#999',
  },
});


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding:30
  },
  formContainer:{
    width:'75%',
    alignItems:'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'center',
    marginLeft: '10%',
    textAlign: 'center',
  },
  input: {
    width: '80%',
    marginBottom: 15,
    paddingVertical: 15,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  inputOnFocus:{
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  pickerStyles:{
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      color: '#333',
      backgroundColor: '#fff',
      textAlign: 'center',
  },
  boton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  botonDeshabilitado: {
    backgroundColor: 'gray', // Cambia el color cuando está deshabilitado
    opacity: 0.5, // Hace que se vea más tenue
  },
  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
  },
  picker: {
    width: '100%',
    height: 50,
    marginBottom: 15,
    backgroundColor: '#fff',
    color:"#999"
  },
  hourPicker: {
    width: '30%',
    backgroundColor:'#FFF',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  diaPicker: {
    width: '40%',
    backgroundColor:'#FFF'
  },
  horarioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  horarioContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  diasContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 15,
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  separador: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  switchText: {
    marginLeft: 10,
    fontSize: 16,
  },
  redesContainer: {
    alignItems: 'center',
    width:'100%'
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
  },
  textArea: {
    backgroundColor:'#FFF',
    height: 100,
    color: '#000',
    padding: 25,
    width: '100%'
  },
  uploadButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
  },
  uploadButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  linkText: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalScroll: {
    maxHeight: 300,
  },
  modalText: {
    fontSize: 14,
    color: '#333',
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default RegistroLocal;