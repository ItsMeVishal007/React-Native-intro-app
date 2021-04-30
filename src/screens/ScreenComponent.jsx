import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ScreenComponent = () => {
 const name = 'Vishal';
 return (
  <View>
   <Text style={style.style}>Getting started with React native </Text>
   <Text style={style.subHeader}>My name is {name}</Text>
  </View>
 )
}

const style = StyleSheet.create({
 style: {
  fontSize: 50
 },
 subHeader :{
  fontSize: 30,
  color: 'red'
 }
})

export default ScreenComponent;