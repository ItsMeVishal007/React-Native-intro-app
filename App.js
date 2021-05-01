 import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ScreenComponent from './src/screens/ScreenComponent';
import ListScreen from './src/screens/ListScreen';
import PractiseList from './src/screens/PractiseList';
import ImageComponent from './src/screens/ImageComponent';
import Counter from './src/screens/Counter';
import Color from './src/screens/Color';
import CustomColorX from './src/screens/CustomColor';
import TextScreen from './src/screens/TextScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    components : ScreenComponent,
    List : ListScreen.apply,
    FriendList :PractiseList,
    ImageComp : ImageComponent,
    CounterComp: Counter,
    ColorComp : Color,
    CustomColor : CustomColorX,
    TextScreen,
    
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Dr.CyberX',
    },
  }
);

export default createAppContainer(navigator);
