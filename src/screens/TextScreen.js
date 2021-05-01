import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';


const TextScreen = () => {
 const [value, setValue] = useState('')
 return (
  <View style={{padding:20}}>
   <Text>Enter Name :</Text>
   <TextInput
    style={style.inputStyle}
    autoCapitalize="none"
    autoCorrect={false}
    onChangeText={(newValue)=>setValue(newValue)}
    value={value}
   />
   <Text>My name is : {value}</Text>
  </View>
 )
}
const style = StyleSheet.create({
 inputStyle: {
  height: 40,
  borderColor: 'lightblue',
  borderWidth: 1,
  borderRadius: 7,
  padding: 5,
 }
})

export default TextScreen;
