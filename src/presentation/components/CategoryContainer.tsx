import React from 'react'
import { StyleSheet, View } from 'react-native'
import CardCategoryComponent from './Category'

export const CategoryContainer = () => {
  return (
    <View style={styles.container} >
        <CardCategoryComponent />
        <CardCategoryComponent />
        <CardCategoryComponent />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        display: "flex",
        gap: 20,
        justifyContent: "space-between",
        height: 30
    },
    card:{

    }
})
export default CategoryContainer