/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView, Text, View, Image } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native</Text>
//         <Text style={styles.instructions}>To get started, edit App.js!</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//         <Text>xdfdfafd</Text>
//         <Text>xdfdfafd</Text>
//       </View>
//     );
//   }
// }

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <ScrollView>
        <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "flex-start" }}>
          <Text>Hello, world!</Text>
          <Image source={pic} style={{ width: 193, height: 110 }} />
          <Greeting name='Rexxar' />
          <Greeting name='Jaina' />
          <Blink text='Look at me look at me look at me' />
          <Text style={styles.red}>just red</Text>
          <Text style={styles.bigBlue}>just bigBlue</Text>
          <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
          <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }} />
          <View style={{ width: 150, height: 150, backgroundColor: 'steelblue' }} />
        </View>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }} />
        <View style={{ width: 150, height: 150, backgroundColor: 'steelblue' }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64 }} />
        <Text style={{ fontSize: 72 }}>If you like</Text>
        <Text style={{ fontSize: 80 }}>React Native</Text>

        <View style={{ flex:1, height: 200 }}>
          <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
          <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
          <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
        </View>

      <View style={{flex: 1,height:100,backgroundColor:'black', flexDirection: 'row',justifyContent:"space-around",alignItems:"flex-end"}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 60, height: 60, backgroundColor: 'skyblue'}} />
        <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}} />
      </View>
      <View style={{flex: 1,height:100,backgroundColor:'black', flexDirection: 'column',justifyContent:"space-around",alignItems:"baseline"}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 60, height: 60, backgroundColor: 'skyblue'}} />
        <View style={{width: 70, height: 70, backgroundColor: 'steelblue'}} />
      </View>
      </ScrollView>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    if (!this.state.isShowingText) {
      return (<Text> </Text>);
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
