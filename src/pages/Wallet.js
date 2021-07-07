import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { getUserMail } = this.props;
    return (
      <div>
        TrybeWallet
        <header>
          <p data-testid="email-field">{ getUserMail }</p>
          <p data-testid="total-field">{ 0 }</p>
          <p data-testid="header-currency-field">BRL</p>
        </header>

        <form>
          <label htmlFor="valor">
            Valor
            <input type="text" name="valor" id="valor" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" name="descrição" id="description" />
          </label>
          <label htmlFor="coinType">
            Moeda
            <select id="coinType">
              <option>BRL</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
          </label>
          <label htmlFor="paymentMethod">
            Método de pagamento
            <select id="paymentMethod">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  getUserMail: user.email,
});

Wallet.propTypes = {
  getUserMail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
