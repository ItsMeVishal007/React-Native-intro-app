import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, TouchableOpacity } from 'react-native';

const Counter = () => {
 const [value, setValue] = useState(0);
 return (
  <View style={style.viewContainer}>
   <TouchableOpacity style={style.btnStyle} onPress={() => { setValue(previousval => previousval + 1) }}><Text style={style.textStyle}>Increment</Text></TouchableOpacity>
   <TouchableOpacity style={style.btnStyle} onPress={() => { setValue(previousval => previousval - 1) }} ><Text style={style.textStyle}>Decrement</Text></TouchableOpacity>
   <Text style={style.textStyleX}>{value}</Text>
  </View>
 )
}

const style = StyleSheet.create({
 viewContainer: {
  display : 'flex',
  justifyContent: 'center',
  alignItems: 'center'
 },
 btnStyle: {
  backgroundColor: 'lightblue',
  width: 200,
  marginVertical: 30,
  alignItems: 'center',
  textAlign: 'center',
  borderRadius: 10
 },
 textStyle:{
  fontSize: 40
 },
 textStyleX:{
  marginVertical: 30,
  fontSize: 40
 }
})

export default Counter;
