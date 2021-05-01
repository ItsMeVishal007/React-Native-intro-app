import React from 'react';
import {Text , View , StyleSheet , Button} from 'react-native';

const BtnColor = ({title , title2 , onIncrease , onDecrease}) => {
 return (
  <View>
   <Button title={title} onPress={onIncrease}/>
   <Button title={title2} onPress={onDecrease} />
  </View>
 )
}

export default BtnColor;
