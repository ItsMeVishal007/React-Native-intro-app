import React from 'react';
import {View, StyleSheet ,Text} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageComponent = () => {
 return (
  <View>
   <ImageDetail title={"City"} image={require("../../assets/img/beach.jpg")} />
   <ImageDetail title={"Beach"} image={require("../../assets/img/forest.jpg")}/>
   <ImageDetail title={"Mountain"} image={require("../../assets/img/mountain.jpg")}/>
  </View>
 )
}

export default ImageComponent;
