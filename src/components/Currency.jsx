import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Currency extends Component {
  render() {
    const { currency, currencies, handleChange } = this.props;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          data-testid="currency-input"
          name="currency"
          id="currency"
          onChange={ handleChange }
          value={ currency }
        >
          { currencies.map((currenc, index) => (
            <option key={ index } value={ currenc }>
              { currenc }
            </option>))}
        </select>
      </label>
    );
  }
}

Currency.propTypes = {
  handleChange: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(Object),
}.isRequired;

export default Currency;
