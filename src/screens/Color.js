import React, { useState } from 'react';
import { View, Text, StyleSheet, Button , FlatList } from 'react-native';

const Color = () => {
 const [boxColor , setBoxColor] = useState([]);

 // console.log(boxColor)
 
 const handleColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`
 }

 return (
  <View>
   <Button 
   onPress={()=>{setBoxColor([...boxColor , handleColor()])}}
   title="Change Color" 
   />
   <Text>Hello</Text>
   <FlatList 
   horizontal
   keyExtractor={(item)=> item}
   data={boxColor}
   renderItem={({item})=>{
    // console.log(item)
    return(
     <View style={{height: 100 , width : 100 , backgroundColor: item , marginVertical:30}} />
    )
   }}
   />
  </View>
 )
}

const style = StyleSheet.create({})

export default Color;
