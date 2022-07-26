import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function SearchScreen() {
  return (
    <View>
      <TextInput autoFocus={true} placeholder={"Search"}/>
    </View>
  )
}