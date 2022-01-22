import React from "react";
import { Button, View, StyleSheet } from "react-native";

const AddCardScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title='Go to Home Screen'
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default AddCardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});