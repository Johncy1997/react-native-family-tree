/**
 * Sample React Native Family Tree App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import FamilyTree from 'react-native-family-tree';

const App = () => {
  console.disableYellowBox=true;
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          >
          <FamilyTree
          title="Rethinam and Family"
          pathColor='black'
          siblingGap={10}
          nodeStyle={{
            width: 100,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
          nodeTitleColor='red'
          familyGap={5}
          strokeWidth={2}
          titleColor='green'
          />
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
