import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { filterTextChanged } from '../redux/actions';


const SearchBar = ({ filterText, setFilterText }) => {
  return (
    <form>
      <div className="form-group col-md-4"> 
        <input type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Buscar..." value={filterText}
          onChange={evt => setFilterText(evt.target.value)} />
      </div>
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