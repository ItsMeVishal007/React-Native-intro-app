import React, { useReducer } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BtnColor from '../components/BtnColor'

const initialObject = {
 red: 0,
 blue: 0,
 green: 0
}

// here state === initialObject

const reducer = (state, actions) => {
 // console.log("reducer state",state)
 // console.log("reducer actions" , actions)
 switch (actions.type) {
  case 'red':
   return state.red + actions.payload > 255 || state.red + actions.payload < 0 ? state : {...state , red : state.red + actions.payload}
  case 'green':
   return state.green + actions.payload > 255 || state.green + actions.payload < 0 ? state : {...state , green : state.green + actions.payload}
  case 'blue':
   return state.blue + actions.payload > 255 || state.blue + actions.payload < 0 ? state : {...state , blue : state.blue + actions.payload}
  default:
   return state;
 }
}

const CustomColor = () => {
 const [state, dispatch] = useReducer(reducer, initialObject);
 const {red , green , blue} = state;
 // console.log('state: ' , state)
 // console.log("dispatch :" , dispatch)

 return (
  <View style={style.ViewStyle}>

   <BtnColor
    title='More Red'
    title2='Less Red'
    onIncrease={() => { dispatch({ type: 'red', payload: 5 }) }}
    onDecrease={() => { dispatch({ type: 'red', payload: -1 * 5 }) }}
   />
   <BtnColor
    title='More Green'
    title2='Less Green'
    onIncrease={() => { dispatch({ type: 'green', payload: 5 }) }}
    onDecrease={() => { dispatch({ type: 'green', payload: -1 * 5 }) }}
   />
   <BtnColor
    title='More Blue'
    title2='Less Blue'
    onIncrease={() => { dispatch({type : 'blue' , payload : 5}) }}
    onDecrease
    ={() => { dispatch({type : 'blue' , payload : -1 * 5}) }}
   />

   <Text>{red} - {green} - {blue}</Text>
   <View style={{ height: 100, width: 400, backgroundColor: `rgb(${red},${green},${blue})` }} />
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

export default CustomColor;

// const [rValue, setrValue] = useState(0);
//  const [gValue, setgValue] = useState(0);
//  const [bValue, setbValue] = useState(0);

//  const setColorLimit = (color, change) => {
//   switch (color) {
//    case 'red':
//     rValue + change > 255 || rValue + change < 0 ? null : setrValue(rValue + change)
//     return;
//    case 'green':
//     gValue + change > 255 || gValue + change < 0 ? null : setgValue(gValue + change)
//     return;
//    case 'blue':
//     bValue + change > 255 || bValue + change < 0 ? null : setbValue(bValue + change)
//     return;
//    default:
//     return;
//   }
//  }