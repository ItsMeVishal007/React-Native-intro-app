import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ScreenComponent from './src/screens/ScreenComponent';
import ListScreen from './src/screens/ListScreen';
import PractiseList from './src/screens/PractiseList';
import ImageComponent from './src/screens/ImageComponent';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    components : ScreenComponent,
    List : ListScreen.apply,
    FriendList :PractiseList,
    ImageComp : ImageComponent,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Dr.CyberX',
    },
  }
);

export default createAppContainer(navigator);
