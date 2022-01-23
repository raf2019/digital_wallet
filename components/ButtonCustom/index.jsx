import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ButtonCustom = ({children}) => {
  return (
    <View style={styles.buttonContainer}>
      {children}
    </View>
  );
};

export default ButtonCustom;


const styles = StyleSheet.create({
  buttonContainer: {
    // flex: 1,
    // backgroundColor: 'pink',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    fontWeight: "bold",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    height: 40,
  },
});