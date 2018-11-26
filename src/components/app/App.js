import React, { Component } from 'react'
import SearchBar from '../search-bar/search-bar'
import BookList from '../book-list/book-list'
import Cart from '../cart/cart'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.apiBase = 'http://localhost:8082/api/books'
    this.state = {
      books: [],
      searchFieldInput: ''
    }
  }

 async componentDidMount() {
   const response = await fetch(this.apiBase)
   
   if (response.status === 200) {
     const resJSON = await response.json()
     if(!resJSON[0]) return
     console.log('resJSON', resJSON)
     this.setState({
       ...this.state,
       books: resJSON
     })
   } else {
     console.log('Error:', response)
     throw new Error('GET request failed')
   }
 } 


  matchingBook = searchFieldInput => {
    this.setState({
      ...this.state,
      searchFieldInput
    })
  }

  addToCart = id => {
    this.setState({
      ...this.state,
      books: this.state.books.map(book => {
        if (book.id === id) book.inCart = true
        return book
      })
    })
  }


  render() {
    return (
      <main>
        <SearchBar matchingBook={this.matchingBook}/>
        <br />
        <div className='container'>
          <ul>
            <BookList books={this.state.books} searchFieldInput={this.state.searchFieldInput} addToCart={this.addToCart}/>
          </ul>
        </div>
        <div className='container'>
          <h2>Cart</h2>
          <ul>
            <Cart books={this.state.books} total={this.state.books.filter(book => book.inCart).reduce((acc, book) => { return acc + parseInt(book.price) }, 0).toFixed(2)}/>
          </ul>
        </div>
      </main>
    );
  }
}

export default App


