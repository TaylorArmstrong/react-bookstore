import React from 'react'
import Book from './book.js'

const BookList = ({ books, searchFieldInput, addToCart }) => (

    books.filter(book => (
        book.title.includes(searchFieldInput) || book.author.includes(searchFieldInput)
    )).map((book, idx) => (
        <Book key={idx} book={book} addToCart={addToCart}/>
    ))
)
export default BookList