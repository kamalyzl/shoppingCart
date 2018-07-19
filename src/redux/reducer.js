
// importamos los `actionTypes` que definimos en el paso anterior
import { actionTypes } from './actions';

// El state inicial
const INIT_STATE = {
  originalProducts: [],
  filterText: '',
  filteredProducts: [],

}

export const reducerAllData = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.DATA_LOADED:
      state = {
        ...state,
        originalProducts: action.payload
      }
      break;
    case actionTypes.FILTER_TEXT:
      state = {
        ...state,
        filterText: action.text
      }
      break;
    default:
      return state
  }

  if (action.type === actionTypes.FILTER_TEXT) {
    const filteredProducts = state.originalProducts.filter(item => {
      return item.title.toLowerCase().search(action.text.toLowerCase()) !== -1;
    })
    state = {
      ...state,
      filteredProducts
    }
  } return state
}

export const reducerList = (state = [], action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {
    case actionTypes.ADD_TO_CART:

      newState = state.concat(action.list)
      console.log(newState)
      return newState
    case actionTypes.DELETE_PRODUCT:
      return state.filter(product => product.id !== action.product.id)
    default:
      return state
  }
}

