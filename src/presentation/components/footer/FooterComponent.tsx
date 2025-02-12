import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FooterComponent: React.FC = () => {
  return (
    <View style={styles.footer}>
        <Text style={styles.text}>
          Todo compras
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer:{
    display:'flex',
    width: '100%',
    height: 200,
    backgroundColor: 'rgb(116, 37, 37)',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    borderTopWidth: 15,
    borderTopColor: 'rgb(204, 204, 204)',
  },
  text:{
    color: 'rgb(255,255,255)'
  }
})
export default FooterComponent