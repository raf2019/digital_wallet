import React, {useState, useEffect} from "react";
import { Button, View, StyleSheet, Text, TextInput } from "react-native";
import Card from "../../components/Card";

const AddCardScreen = ({ navigation }) => {
  const [inputCardName, setInputCardName] = useState('');
  const [inputCardUser, setInputCardUser] = useState('');
  const [inputCardNumber, setInputCardNumber] = useState('');

  const cardShow = () => (
    <Card
      visible
      cardItem={
        {
          cardName: inputCardName,
          cardUser: inputCardUser,
          cardNumber: inputCardNumber
        }
      } />
  );

  useEffect(() => {
    cardShow();
  }, [inputCardName, inputCardUser, inputCardNumber])
  return (
    <View style={styles.container}>
      <View>
        <Text>
          Adicionar cartão
        </Text>
      </View>
      <View>
        {cardShow()}
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputItem}>
          <Text style={styles.inputLabel}>
            NOME DO CARTÃO
          </Text>
          <TextInput
            style={styles.inputField}
            placeholder='Nome do Cartão'
            placeholderTextColor='black'
            onChangeText={(enteredText) => setInputCardName(enteredText)}
            value={inputCardName}
          />
        </View>
        <View style={styles.inputItem}>
          <Text style={styles.inputLabel}>
            NOME COMPLETO
          </Text>
          <TextInput
            style={styles.inputField}
            placeholder='Nome Completo'
            placeholderTextColor='black'
            onChangeText={(enteredText) => setInputCardUser(enteredText)}
            value={inputCardUser}
          />
        </View>
        <View style={styles.inputItem}>
          <Text style={styles.inputLabel}>
            NÚMERO
          </Text>
          <TextInput
            style={styles.inputField}
            placeholder='1234 1234 1234 1234'
            placeholderTextColor='black'
            onChangeText={(enteredText) => setInputCardNumber(enteredText)}
            value={inputCardNumber}
          />
        </View>
      </View>
      <View style={styles.buttonSubmit}>
        <Button
          title='ADICIONAR'
          onPress={() => navigation.navigate('Home')}
        />
      </View>
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
  inputLabel: {
    fontSize: 10,
    fontWeight: '600',
  },
  inputField: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#989898',
    padding: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  inputContainer: {
    // flex: 1,
    width: '80%',
    alignItems: 'stretch',
  },
  inputItem: {
    margin: 4,
  },
  buttonSubmit: {
    width: '80%',
    alignItems: 'stretch',
    borderRadius: 6,
    margin: 8,
    paddingVertical: 20,
    // flex: 1
  }
});