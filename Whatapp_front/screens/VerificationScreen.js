import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

// Components
import StatusBarElement from '../components/Reusable/StatusBarElement';
import VerifyForm from '../components/VerificationPartials/VerifyForm';

// Styles
import {white} from '../assets/palette/pallete.json';
import {primary} from '../assets/palette/pallete.json';

const VerificationScreen = ({route}) => {
  const userMailbox = route.params.email;

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBarElement barStyle={'light-content'} backgroundColor={primary} />
      <VerifyForm userMailbox={userMailbox} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: white,
  },
});

export default VerificationScreen;
