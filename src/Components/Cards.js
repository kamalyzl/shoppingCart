import React from 'react'
import { connect } from 'react-redux'
import { addToCartList } from '../redux/actions';

const Cards = ({ products, addToCart }) => {
  return (
    <div>
      {products.map((val) =>
        <figure key={val.id}>
          <img alt={val.id} src={val.thumbnail} />
          <figcaption>
            <p>{`Descripción: ${val.title}`}</p>
            <br />
            <p>{`${val.currency_id}-${val.price}`}</p>
            <button onClick={ () => addToCart(val)}>Agregar</button>
          </figcaption>
        </figure>
      )}
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart(newList) {
      dispatch(addToCartList(newList));
    }
  };
}



export default connect(null,mapDispatchToProps)(Cards);
 