import React from 'react';
import { StyleSheet, View, Button, Text, TouchableWithoutFeedback, TouchableHighlight } from "react-native";

const Card = ({cardItem, visible}) => {
  return (
    <View style={styles.card}>
        <View style={styles.card1stLine}>
          <Text style={styles.cardEmphasis}>
            {cardItem.cardName}
          </Text>
          <Text style={styles.cardEmphasis}>
            Bandeira
          </Text>
        </View>
        <View style={styles.card2ndLine}>
          <Text>
            {cardItem.cardUser}
          </Text>
          {visible ? 
            <Text style={styles.cardEmphasis}>
              {cardItem.cardNumber}
            </Text> :
            <Text style={styles.cardEmphasis}>- - - -  - - - -  - - - -  - - - -</Text>
          }
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'pink',
    borderRadius: 15,
    // width: '95%',
    width: 310,
    height: 200,
    padding: 20,
    margin: 10,
    justifyContent: 'space-between',
    // flex: 1
    elevation: 3,
    shadowColor: '#000',
  },
  cardEmphasis: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  card1stLine: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default Card;
