import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen50103781Navigator from '../features/BlankScreen50103781/navigator';
import BlankScreen49103709Navigator from '../features/BlankScreen49103709/navigator';
import Maps103691Navigator from '../features/Maps103691/navigator';
import Add-Item103690Navigator from '../features/Add-Item103690/navigator';
import Maps103686Navigator from '../features/Maps103686/navigator';
import UserProfile103682Navigator from '../features/UserProfile103682/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen50103781: { screen: BlankScreen50103781Navigator },
BlankScreen49103709: { screen: BlankScreen49103709Navigator },
Maps103691: { screen: Maps103691Navigator },
Add-Item103690: { screen: Add-Item103690Navigator },
Maps103686: { screen: Maps103686Navigator },
UserProfile103682: { screen: UserProfile103682Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
