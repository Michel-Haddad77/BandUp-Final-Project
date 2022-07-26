import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function SearchScreen() {
  return (
    <View>
      <TextInput  style={styles.searchbar} autoFocus={true} placeholder={"Search"}/>
    </View>
  )
}

const styles = StyleSheet.create({
    searchbar:{
        backgroundColor: 'white',
        height: 50,
        padding: 10,
        fontSize: 18
    }
})