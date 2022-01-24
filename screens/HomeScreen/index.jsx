import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback, TouchableHighlight } from "react-native";
import ButtonCustom from '../../components/ButtonCustom';
import Eye from 'react-native-vector-icons/Ionicons';
import Trash from 'react-native-vector-icons/Octicons';
import Plus from 'react-native-vector-icons/Entypo';
import Card from "../../components/Card";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

const HomeScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(true);

  const card = useSelector(store => store.card);

  return (
    <View style={styles.container}>
      <View style={styles.infoUp}>
        <Text style={styles.titlePrimary}>
          Cartões
        </Text>
        <TouchableHighlight
          onPress={() => navigation.navigate('CardAdd')}
        >
          <ButtonCustom>
            <Plus name='plus' size={20}/>
          </ButtonCustom>
        </TouchableHighlight>
      </View>

      {card.length === 0 ?
        <View>
          <Text>
            Você não tem cartões
          </Text>
        </View> :
        <View style={styles.cardsContainer}>
          <ScrollView horizontal={true}>
            {card.map((cardItem, index) => <Card key={index} cardItem={cardItem} visible={visible} />)}
          </ScrollView>
        </View>
      }

      <View style={styles.infoBottom}>
        <Text>
          Ações
        </Text>
        <TouchableHighlight onPress={() => setVisible(!visible)}>
          <ButtonCustom>
            <Eye name='eye-outline' size={20} style={styles.horizontal}/>
            <View style={styles.horizontal}>
              <Text style={styles.textBottom}>
                ESCONDER NÚMERO
              </Text>
            </View>
          </ButtonCustom>
        </TouchableHighlight>
        <TouchableWithoutFeedback>
          <ButtonCustom>
            <Trash name='trashcan' size={20} color='red' style={styles.horizontal} />
            <View style={styles.horizontal}>
              <Text style={[styles.textBottom, styles.red]}>
                APAGAR CARTÃO
              </Text>
            </View>
          </ButtonCustom>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
  titlePrimary: {
    flex: 1,
    fontSize: 40,
    fontWeight: "bold",
  },
  infoUp: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardsContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  infoBottom: {
    flex: 1,
    // marginBottom: 50,
  },
  textBottom: {
    fontSize: 15,
    fontWeight: '700',
  },
  red: {
    color: 'red',
  },
  horizontal: {
    marginHorizontal: 10
  }
});

export default HomeScreen;
