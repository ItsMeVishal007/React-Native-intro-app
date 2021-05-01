import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BtnColor from '../components/BtnColor'

const CustomColor = () => {
 const [rValue, setrValue] = useState(0);
 const [gValue, setgValue] = useState(0);
 const [bValue, setbValue] = useState(0);

 const setColorLimit = (color, change) => {
  switch (color) {
   case 'red':
    rValue + change > 255 || rValue + change < 0 ? null : setrValue(rValue + change)
    return;
   case 'green':
    gValue + change > 255 || gValue + change < 0 ? null : setgValue(gValue + change)
    return;
   case 'blue':
    bValue + change > 255 || bValue + change < 0 ? null : setbValue(bValue + change)
    return;
   default:
    return;
  }
 }

 return (
  <View style={style.ViewStyle}>

   <BtnColor
    title='More Red'
    title2='Less Red'
    onIncrease={() => { setColorLimit('red', 10) }}
    onDecrease={() => { setColorLimit('red', -10) }}
   />
   <BtnColor
    title='More Green'
    title2='Less Green'
    onIncrease={() => { setColorLimit('green', 10) }}
    onDecrease={() => { setColorLimit('green', -10) }}
   />
   <BtnColor
    title='More Blue'
    title2='Less Blue'
    onIncrease={() => { setColorLimit('blue', 10) }}
    onDecrease
    ={() => { setColorLimit('blue', -10) }}
   />

   <Text>{rValue} - {gValue} - {bValue}</Text>
   <View style={{ height: 100, width: 400, backgroundColor: `rgb(${rValue},${gValue},${bValue})` }} />
  </View>
 )
}
const style = StyleSheet.create({
 ViewStyle: {
  marginTop: 20,
  height: 500,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'center'
 },
 text: {
  fontSize: 40
 }
})

export default CustomColor
