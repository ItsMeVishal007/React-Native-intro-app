import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Color = () => {
 const [boxColor , setBoxColor] = useState([0,0,0]);

 console.log(boxColor)
 
 const handleColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`
 }

 return (
  <View>
   <Button 
   onPress={()=>{setBoxColor(handleColor())}}
   title="Change Color" 
   />
   <Text>Hello</Text>
   <View style={{height: 100 , width : 100 , backgroundColor: `rgb(${boxColor})`}} />
  </View>
 )
}

const style = StyleSheet.create({})

export default Color;
