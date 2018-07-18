import axios from 'axios';


export const actionTypes = {
  FILTER_TEXT: 'FILTER_TEXT',
  DATA_LOADED: 'DATA_LOADED',
  ADD_TO_CART: 'ADD_TO_CART',
  DELETE_PRODUCT: 'DELETE_PRODUCT',
};

export const filterTextChanged = text => ({
  type: actionTypes.FILTER_TEXT,
  text
});

export const deleteProductAction = deleteProduct => ({
  type: actionTypes.DELETE_PRODUCT,
  product: deleteProduct
});

export const addToCartList = productsList => ({
  type: actionTypes.ADD_TO_CART,
  list: productsList
});

export const showProducts = () => {
  return dispatch => {
    axios.get('https://api.mercadolibre.com/sites/MPE/search?condition=new&q=auto')
      .then(res => dispatch({
        type: actionTypes.DATA_LOADED,
        payload: res.data.results
      })
      ).catch(err => console.log(err))
  }
}

