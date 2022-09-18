import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { ShoppingCart } from 'phosphor-react';

import './style.css';

import freeShippingSvg from '../../assets/free5.svg';

class CategoryCard extends Component {
  render() {
    const { productId, thumbnail, title, price, onClick, shipping } = this.props;
    return (
      <div className="card" >
        <div className="free-shipping-svg">
        { shipping && <img src={ freeShippingSvg } alt="Profile" /> }          
        </div>

        <Link
          to={ `/product/${productId}` }
          className="card-link"
        >
          <img className="imgBox"
            src={ thumbnail }
            alt={ title }
          />
          <div className="info-content">
            <p>{title}</p>
            <p className="price">
              {' '}
              {`R$ ${price}`}
            </p>
            {/* <ShoppingCart size={36} color="#ddd" /> */}
            {/* <div className="free-shipping">
            { shipping && <p className="shipping" data-testid="free-shipping"> Frete Grátis </p> }
            </div> */}
          </div>
          
        </Link>
        <div className="content">
          <input
            className="btnAdd"
            type="button"
            value="ADICIONAR AO CARRINHO"
            onClick={ onClick }
          />
        </div>
      </div>
    );
  }
}

CategoryCard.propTypes = {
  productId: PropTypes.string,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  onClick: PropTypes.func,
}.isRequired;

export default CategoryCard;