import React from 'react';
import { Text, FlatList, StyleSheet, View } from 'react-native';

const ListScreen = () => {
 const friends = [
  { name: 'Friend #1' },
  { name: 'Friend #2' },
  { name: 'Friend #3' },
  { name: 'Friend #4' },
  { name: 'Friend #5' },
  { name: 'Friend #6' },
  { name: 'Friend #7' },
  { name: 'Friend #8' },
  { name: 'Friend #9' },
  { name: 'Friend #10' },
  { name: 'Friend #11' },
  { name: 'Friend #12' },
 ]
 return (
  <FlatList
   keyExtractor={(element) => { element.name }}
   horizontal={true}
   showsHorizontalScrollIndicator={false}
   keyExtractor={(friend) => { friend.name }}
   data={friends}
   renderItem={({ item }) => {
    return (
     <Text  style={style.textStyle}>{item.name}</Text>
    )
   }}
  />
 )
}

const style = StyleSheet.create({
 textStyle: {
  marginVertical: 20
 }
})

export default ListScreen;
