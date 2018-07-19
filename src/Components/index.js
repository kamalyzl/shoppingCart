
import React, { Component } from 'react';
import SearchBar from './Search';
import Cards from './Cards';
import List from './List'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showProducts } from '../redux/actions';

class Home extends Component {
  //Will llama a showProducts antes de que se renderice el componente
  componentWillMount() {
    this.props.showProducts()
  }

  render() {
    const getData = () => {
      if (this.props.products.length < 1)
        return this.props.productsOrginial
      else return this.props.products
    }
    
    return (
      <div className="container-fluid">
        <h1>Venta de Autos</h1>
        <SearchBar />
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <Cards products={getData()} />
          </div>
          <div className="col-sm-12 col-md-4">
            <List productsList={this.props.reducerList} />
          </div>
        </div>
      </div>
    )
  }

}

Home.propTypes = {
  // Array tipo objeto
  products: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

const mapStateToProps = (state) => {
  const { filteredProducts, originalProducts } = state.reducerAllData;
  return {
    products: filteredProducts,
    productsOrginial: originalProducts,
    reducerList: state.reducerList
  };
}


export default connect(mapStateToProps, { showProducts })(Home);




