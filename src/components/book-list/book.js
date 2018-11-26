import React from 'react'

const Book = ({ book: { id, title, author }, addToCart }) => (
    <li id={id}>
        {`${title}, By: ${author}`}
        <button onClick={() => addToCart(id)}>Add Book To Cart</button>
    </li>
)

export default Book