
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
    return (
      <div>
        <h1>Venta de Autos</h1>
        <SearchBar />
        <div className="flex-grid-thirds">
          <div className="col">
            <Cards products={this.props.products} />
          </div>
          <div className="col">
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
  const { filteredProducts } = state.reducerAllData;
  return {
    products: filteredProducts,
    reducerList: state.reducerList
  };
}


export default connect(mapStateToProps, { showProducts })(Home);




