/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import RootScreen from './Src/NavigationStacks/RootScreen';
import actions from './Src/redux/actions';
import store from './Src/redux/store';
import { getUserData } from './Src/Utilities/AsyncStorage';

const App = () => {
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    if (!__DEV__) {
      console.log = () => { };
    }
    _saveUserData();
  }, []);
  const _saveUserData = async () => {
    setLoading(true)
    await getUserData().then((res) => {
      console.log('user loacal data : -=--- ', res);
      actions.saveUserDataToReux(res)
    setLoading(false)

    })
  };

  return (
<GestureHandlerRootView style={{ flex: 1 }}>
<Provider store={store}>

  {!loading &&
    <RootScreen />
  }
</Provider>
</GestureHandlerRootView>




  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex:1,
  }
});

export default App;
