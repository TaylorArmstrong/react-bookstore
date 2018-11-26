import React from 'react'

const Book = ({ book: { id, title, author, price }, addToCart }) => (
    <li id={id}>
        {`${title}, By: ${author}`}
        <button onClick={() => addToCart(id)}>Buy for ${price}</button>
    </li>
)

export default Book