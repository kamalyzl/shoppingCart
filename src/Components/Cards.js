import React from 'react'
import { connect } from 'react-redux'
import { addToCartList } from '../redux/actions';
import uid from 'uid'


const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  product: {
    width: '250px',
    marginLeft: 10,
    marginRight: 10
  },
  image: {
    width: '250px',
    height: 'auto'
  }
};

const Cards = ({ products, addToCart }) => {
  return (
    <div style={styles.products}>
      {products.map((val) =>
        <div className="card" style={styles.product} key={uid(10)}>
          <img style={styles.image} alt={val.id} src={val.thumbnail} />
          <div className="card-body">
            <h5 className="card-title">{`${val.currency_id}-${val.price}`}</h5>
            <p className="card-text">{val.title}</p>
            <a onClick={() => addToCart(val)} className="btn btn-primary">Agregar</a>
          </div>
        </div>

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



export default connect(null, mapDispatchToProps)(Cards);
