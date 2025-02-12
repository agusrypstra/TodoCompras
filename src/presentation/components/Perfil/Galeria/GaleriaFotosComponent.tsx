// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

// // Define la interfaz para las propiedades del componente
// interface GaleriaProps {
//   fotos: (string | number)[]; // Un array de URLs de las fotos
// }

// export const GaleriaFotosComponent: React.FC<GaleriaProps> = ({ fotos }) => {
//   const renderItem = ({ item }: { item: string | number }) => {
//     const source = typeof item === 'string' ? { uri: item } : item;
//     return (
//       <View style={styles.item}>
//         <Image source={source} style={styles.image} />
//       </View>
//     );
//   };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Galería de fotos</Text>
//       <FlatList
//       data={fotos}
//       renderItem={renderItem}
//       keyExtractor={(item, index) => index.toString()}
//       contentContainerStyle={styles.grid}
//       numColumns={2}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//   },
//   title: {
//     textAlign: 'center',
//     fontSize: 24,
//   },
//   grid: {
//     justifyContent: 'center',
//   },
//   item: {
//     flex: 1, // Distribución uniforme en columnas
//     margin: 5, // Espaciado entre elementos
//     alignItems: 'center', // Centrar la imagen dentro del contenedor
//   },
//   image: {
//     minWidth: 100, // Tamaño mínimo del ancho
//     minHeight: 100, // Tamaño mínimo del alto
//     maxWidth: 200, // Tamaño máximo del ancho
//     maxHeight: 200, // Tamaño máximo del alto
//     width: '100%', // Se ajusta proporcionalmente
//     height: undefined, // Permite que el alto se ajuste automáticamente
//     aspectRatio: 1, // Mantiene la proporción
//   },
// });

// export default GaleriaFotosComponent;














// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, Image, FlatList, Dimensions } from 'react-native';

// interface GaleriaProps {
//   fotos: (string | number)[]; // Array con URLs o imágenes locales
// }

// const GaleriaFotosComponent: React.FC<GaleriaProps> = ({ fotos }) => {
//   const screenWidth = Dimensions.get('window').width;
//   const maxImageWidth = screenWidth / 2 - 20; // Ajustar para 2 columnas con margen
//   const [imageDimensions, setImageDimensions] = useState<{ [key: string]: { width: number; height: number } }>({});

//   useEffect(() => {
//     const fetchImageDimensions = async () => {
//       const dimensions: { [key: string]: { width: number; height: number } } = {};
//       for (const item of fotos) {
//         if (typeof item === 'string') {
//           await new Promise<void>((resolve) => {
//             Image.getSize(
//               item,
//               (width, height) => {
//                 const aspectRatio = width / height;
//                 dimensions[item] = {
//                   width: Math.min(maxImageWidth, width),
//                   height: Math.min(maxImageWidth / aspectRatio, height),
//                 };
//                 resolve();
//               },
//               () => resolve() // En caso de error, asignar dimensiones predeterminadas
//             );
//           });
//         } else {
//           const source = Image.resolveAssetSource(item);
//           const aspectRatio = source.width / source.height;
//           dimensions[item] = {
//             width: Math.min(maxImageWidth, source.width),
//             height: Math.min(maxImageWidth / aspectRatio, source.height),
//           };
//         }
//       }
//       setImageDimensions(dimensions);
//     };

//     fetchImageDimensions();
//   }, [fotos]);

//   const renderItem = ({ item }: { item: string | number }) => {
//     const dimensions = imageDimensions[item];
//     return (
//       <View style={styles.item}>
//         {dimensions ? (
//           <Image
//             source={typeof item === 'string' ? { uri: item } : item}
//             style={{
//               width: dimensions.width,
//               height: dimensions.height,
//               borderRadius: 8,
//             }}
//             resizeMode="contain"
//           />
//         ) : (
//           <Text>Cargando...</Text>
//         )}
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Galería de fotos</Text>
//       <FlatList
//         data={fotos}
//         renderItem={renderItem}
//         keyExtractor={(item, index) => `${item}_${index}`}
//         numColumns={2}
//         contentContainerStyle={styles.grid}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 15,
//   },
//   title: {
//     textAlign: 'center',
//     fontSize: 24,
//     marginBottom: 10,
//   },
//   grid: {
//     justifyContent: 'center',
//     gap: 10
//   },
//   item: {
//     flex: 1,
//     margin: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default GaleriaFotosComponent;


import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ImageViewing from 'react-native-image-viewing';

interface GaleriaFotosComponentProps {
  fotos: Array<number | { uri: string }>; // Acepta imágenes locales o remotas
}

const GaleriaFotosComponent: React.FC<GaleriaFotosComponentProps> = ({ fotos }) => {
  const [isVisible, setIsVisible] = useState(false); // Controla la visibilidad del modal
  const [selectedIndex, setSelectedIndex] = useState(0); // Índice de la imagen seleccionada

  if (!fotos || fotos.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Galería de fotos</Text>
        <Text style={styles.noImages}>No hay fotos disponibles</Text>
      </View>
    );
  }

  // Convierte todas las imágenes a un formato uniforme compatible con ImageViewing
  const formattedImages = fotos.map((foto) =>
    typeof foto === 'object' ? foto : { uri: Image.resolveAssetSource(foto).uri }
  );

  // Abre el modal con la imagen seleccionada
  const openImage = (index: number) => {
    setSelectedIndex(index);
    setIsVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galería de fotos</Text>
      <View style={styles.grid}>
        {formattedImages.map((item, index) => (
          <TouchableOpacity
            key={`${index}_${item.uri}`}
            style={styles.item}
            onPress={() => openImage(index)}
          >
            <Image
              source={item}
              style={styles.image}
              onError={() => console.log(`Error al cargar la imagen en la posición ${index}`)}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Modal para visualizar la imagen */}
      <ImageViewing
        images={formattedImages} // Usa las imágenes formateadas
        imageIndex={selectedIndex} // Índice de la imagen seleccionada
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)} // Cierra el modal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  noImages: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Permite que los elementos se ajusten en filas
    justifyContent: 'center',
  },
  item: {
    margin: 5,
    alignItems: 'center',
    width: 150,
    height: 150,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
});

export default GaleriaFotosComponent;
