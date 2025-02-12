import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const InformacionBox: React.FC = () => {
  return (
    // <View style={styles.container}>
    //   {items.map((item, index) => (
    //     <View key={item.id} style={styles.itemContainer}>
    //       <Text style={styles.text}>{item.value}</Text>
    //       {/* Agregar separador condicionalmente */}
    //       {index < items.length - 1 && <View style={styles.separator} />}
    //     </View>
    //   ))}
    // </View>

    <View style={styles.container}>
        <View style={[styles.infoContainer,styles.separator]}>
            <Text style={styles.primaryText}> 5 años </Text>
            <Text style={styles.secondaryText}> brindando soluciones </Text>
        </View>
        <View style={[styles.infoContainer, styles.separator]}>
            <Text style={styles.primaryText}> $8.000 </Text>
            <Text style={styles.secondaryText}> por hora / charlable </Text>
        </View>
        <View style={[styles.infoContainer]}>
            <Text style={styles.primaryText}> 8 a 16 </Text>
            <Text style={styles.secondaryText}> horario de trabajo </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%'
    },
    infoContainer:{
        flexDirection: 'column',
        textAlign: 'center',
        alignItems:'center',
        width: '30%',
    },
    primaryText:{
        fontSize: 30,
        fontWeight:'bold'
    },
    secondaryText:{
        fontSize:15
    },
    separator: {
        borderRightColor: 'rgb(167, 167, 167)',
        borderRightWidth: 1
      },
})

export default InformacionBox