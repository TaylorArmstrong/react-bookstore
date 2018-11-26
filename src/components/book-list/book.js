import React from 'react'

const Book = ({ book: { id, title, author }}) => (
    <li id={id}>
        {`${title}, By: ${author}`}
    </li>
)

export default Book