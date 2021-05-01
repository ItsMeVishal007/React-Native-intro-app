import React, { useState, useReducer } from 'react';
import { View, StyleSheet, Button, Text, TouchableOpacity } from 'react-native';

const reducer = (state, actions) => {
 switch (actions.type) {
  case 'Add':
   return {
    ...state,
    counter: state.counter + actions.payload
   }
  case 'Sub':
   return {
    ...state,
    counter: state.counter - actions.payload
   }
 }
}

const Counter = () => {
 const [state, dispatch] = useReducer(reducer, { counter: 0 })
 const { counter } = state;

 return (
  <View style={style.viewContainer}>

   <TouchableOpacity style={style.btnStyle} onPress={() => { dispatch({ type: 'Add', payload: 1 }) }}><Text style={style.textStyle}>Increment</Text></TouchableOpacity>

   <TouchableOpacity style={style.btnStyle} onPress={() => { dispatch({ type: 'Sub', payload: 1 }) }} ><Text style={style.textStyle}>Decrement</Text></TouchableOpacity>

   <Text style={style.textStyleX}>{counter}</Text>
  </View>
 )
}

const style = StyleSheet.create({
 viewContainer: {
  display: 'flex',
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
 textStyle: {
  fontSize: 40
 },
 textStyleX: {
  marginVertical: 30,
  fontSize: 40
 }
})

export default Counter;
