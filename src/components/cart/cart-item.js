import React from 'react'

const CartItem = ({ book: { id, title, price } }) => (
    <li id={id}>{title} ${price.toFixed(2)}</li>
)

export default CartItem