import React from 'react';
import { View, StyleSheet, Text , Image} from 'react-native';

const ImageDetail = ({title , image}) => {

 const randomNum = Math.floor(Math.random() * 11)

 return (
  <View>
   <Image source={image} />
   <Text>Image {title}</Text>
   <Text>Image Points : {randomNum}</Text>
  </View>
 )
}

export default ImageDetail;