import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

  return (<View>
    <Text style={styles.text}>Hello world</Text>

    <Button
      onPress={() => { navigation.navigate('components') }}
      title='Go to Home Page'
    />
    <Button
      onPress={() => { navigation.navigate('FriendList') }}
      title='Go to List Demo'
    />
    <Button
      onPress={() => { navigation.navigate('ImageComp') }}
      title='Go to Image Demo'
    />

    <Button
      onPress={() => { navigation.navigate('CounterComp') }}
      title='Go to Counter Page'
    />

    <Button
      onPress={() => { navigation.navigate('ColorComp') }}
      title='Go to Color Page'
    />

    <Button 
      onPress={()=>{navigation.navigate('CustomColor')}}
      title='Go to custom color picker page'
    />

    <Button 
      onPress={()=>{navigation.navigate('TextScreen')}}
      title='Go to the TextScreen'
    />

  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  touchableOpacityStyle: {
    backgroundColor: 'lightblue',
    padding: 10,
    fontSize: 70
  }
});

export default HomeScreen;
