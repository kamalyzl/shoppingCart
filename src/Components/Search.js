import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { filterTextChanged } from '../redux/actions';


const SearchBar = ({ filterText, setFilterText }) => {
  return (
    <form>
      <input
        type="text" placeholder="Search..."
        value={filterText}
        onChange={evt => setFilterText(evt.target.value)}
      />
    </form>
  );
}

SearchBar.propTypes = {
  filterText: PropTypes.string.isRequired,
  setFilterText: PropTypes.func.isRequired,
}

// mapStateToProps obtiene los datos del estado
const mapStateToProps = (state) => {
  const { filterText } = state.reducerAllData;
  // y devolvemos las nuevas props
  return {
    filterText,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilterText(newFilterText) {
      dispatch(filterTextChanged(newFilterText));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);