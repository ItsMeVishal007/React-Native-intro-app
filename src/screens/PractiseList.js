import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const PractiseList = () => {

 const friends = [
  { name: 'Friend #0', age: 20 },
  { name: 'Friend #1', age: 22 },
  { name: 'Friend #2', age: 24 },
  { name: 'Friend #3', age: 21 },
  { name: 'Friend #4', age: 28 },
  { name: 'Friend #5', age: 22 },
  { name: 'Friend #6', age: 29 },
  { name: 'Friend #7', age: 21 },
  { name: 'Friend #8', age: 27 },
  { name: 'Friend #9', age: 26 },
  { name: 'Friend #10', age: 22 },
  { name: 'Friend #11', age: 29 },
 ]

 return (
  <View>
   <FlatList
   keyExtractor = {(elements => elements.name)}
    data={friends}
    renderItem={({ item }) => {
     return (
      <Text style={style.style}>Name : {item.name} - Age : {item.age}</Text>
     )
    }}
   />
  </View>
 )
}

const style = StyleSheet.create({
 style: {
  marginVertical: 50
 }
})

export default PractiseList;
