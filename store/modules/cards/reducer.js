import { ADD_CARD, DEL_CARD } from "./actionTypes";

const initialState = [
  // {
  //   cardName: 'bank 1',
  //   cardUser: 'John Doe',
  //   cardNumber: '1234 1234 1234 1234'
  // },
  // {
  //   cardName: 'bank 2',
  //   cardUser: 'Will Shake',
  //   cardNumber: '4321 4321 4321 4321'
  // },
  // {
  //   cardName: 'bank 3',
  //   cardUser: 'I',
  //   cardNumber: '7890 7890 7890 7890'
  // }
];

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
      // return action.payload;
    case DEL_CARD:
      // return action.payload;
      return state.filter(el => el.cardNumber !== action.payload.cardNumber)
    default:
      return state;
  }
}

export default cardReducer;