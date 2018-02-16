import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { Constants } from 'expo'
import Decks from './components/Decks'
import NewDeck from './components/NewDeck'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { primaryDark, primary, white, primaryLight } from './utils/colors'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import DeckInfo from './components/DeckInfo'

function FlashStatusBar ({ backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
    )
}

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
    }
  }
},
{
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? primary : white,
    style: {
      height: 54,
      backgroundColor: Platform.OS === 'ios' ? white : primary,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
    },
    indicatorStyle: {
      backgroundColor: primaryLight,
      height: 2
    },
    shadowRadius: 6,
    shadowOpacity: 1
    }
  }
)

const MainNav = StackNavigator({
  Home: {
    screen: Tabs
  },
  DeckInfo: {
    screen: DeckInfo
  },
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
        <FlashStatusBar backgroundColor={primaryDark} barStyle='light-content'/>
          <MainNav />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
