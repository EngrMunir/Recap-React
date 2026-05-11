import React from 'react';

const MenuItem = () => {
    return (
        <div>
            <span>{name} - ${price}</span>
            <button onClick={() =>onOrder(name, price)}>Order</button>

        </div>
    );
};

export default MenuItem;