import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
    const handleOrder = (itemName, itemPrice) =>{
        alert(`You ordered ${itemName} for $${itemPrice}`)
    }
    return (
        <div>
            <h2>Our Menu</h2>
            <MenuItem name="Pizza" price={12} onOrder={handleOrder}/>
            <MenuItem name="Burger" price={8} onOrder={handleOrder}/>
            <MenuItem name="Salad" price={6} onOrder={handleOrder}/>
        </div>
    );
};

export default Menu;