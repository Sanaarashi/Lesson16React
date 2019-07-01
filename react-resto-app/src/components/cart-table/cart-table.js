import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import {deleteFromCart} from '../../actions';

const CartTable = ({items, deleteFromCart}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, price, url, id, quantity} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-quantity">x{quantity}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div onClick={() => deleteFromCart(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
            <button onClick={() => buyAll(items)} className="cart__ordbtn">Сделать заказ</button>
            </div>
        </>
    );
};

const buyAll = async (items) => {
    await fetch('http://localhost:3001/orders', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(items)
    });
  };

const mapStateToProps = ({items}) => {
    return {
        items
    }
};

const mapDispatchToProps = {
    deleteFromCart
}

export default connect(mapStateToProps,mapDispatchToProps)(CartTable);