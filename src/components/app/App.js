import React, { Component } from 'react'
import SearchBar from '../search-bar/search-bar'
import BookList from '../book-list/book-list'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.apiBase = 'http://localhost:8082/api/books'
    this.state = {
      books: [],
      searchInput: ''
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


  render() {
    return (
      <main>
        <SearchBar matchingBook={this.matchingBook}/>
        <br />
        <ul>
          <BookList books={this.state.books} searchFieldInput={this.state.searchFieldInput} />
        </ul>
      </main>
    );
  }
}

export default App
