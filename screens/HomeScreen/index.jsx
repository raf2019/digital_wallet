import React from "react";
import { StyleSheet, View, Button } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title='Go to Add Card Screen'
        onPress={() => navigation.navigate('CardAdd')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})

export default HomeScreen;
