import React from 'react';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {PersistGate} from 'redux-persist/integration/react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

import RootContainer from './Root';
import {store, persistor} from './src/store/dev';
import {colors} from './src/modules/colors';

Icon.loadFont();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

class App extends React.PureComponent {
  componentDidMount() {
    setTimeout(() => SplashScreen.hide(), 2000);
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={
            <View style={styles.container}>
              <ActivityIndicator color={colors.RED} />
            </View>
          }
          persistor={persistor}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <RootContainer />
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
