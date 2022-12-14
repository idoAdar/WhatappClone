import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {navigate} from '../../utils/rootNavigation';

// Components
import TextElement from './TextElement';
import ButtonElement from './ButtonElement';

// Styles
import CloseIcon from '../../assets/icons/closeIcon.svg';
import {white, black, teal} from '../../assets/palette/pallete.json';

// Action Types
import {ACTIVATION_REQUIRED} from '../../fixtures/actionTypes.json';

const ModalElement = ({message, closeModal}) => {
  const onButtonElement = () => {
    closeModal();
    if (message.action.require === ACTIVATION_REQUIRED) {
      navigate('verification-screen', {email: message.action.user});
    }
  };

  let dispalyButton = null;
  if (message.action) {
    dispalyButton = (
      <ButtonElement
        title={message.action.press}
        onPress={onButtonElement}
        backgroundColor={teal}
        titleColor={white}
        customStyle={styles.button}
      />
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={closeModal} style={styles.closeContainer}>
        <CloseIcon style={{color: black}} />
      </TouchableOpacity>
      <TextElement customStyle={styles.text}>
        {message.errorMessage}
      </TextElement>
      {dispalyButton}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  closeContainer: {
    alignItems: 'flex-end',
  },
  text: {
    marginBottom: 16,
  },
  button: {
    height: 40,
    width: 100,
    borderRadius: 25,
  },
});

export default ModalElement;
