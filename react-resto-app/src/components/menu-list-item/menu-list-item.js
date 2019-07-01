import React from 'react';
import './menu-list-item.scss';
import salad from './salad.png';
import meat from './steak.png';
import pizza from './pizza.png';

const MenuListItem = ({menuItem, onAddToCart}) => {
    const {title, url, price, category} = menuItem;

    const icon = () => {
        switch (category) {
            case 'salads':
                return salad;
            case 'meat':
                return meat;
            case 'pizza':
                return pizza;
            default:
                return;
        }
    }

    return (
            <li className="menu__item">
                <div className="menu__title">
                    <img className="menu__icon" src={icon()} alt="type"></img>   
                    {title}
                </div>             
                <img className="menu__img" src={url} alt="Cesar salad"></img>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <button onClick={onAddToCart} className="menu__btn">Add to cart</button>
            </li>
    )
}

export default MenuListItem;