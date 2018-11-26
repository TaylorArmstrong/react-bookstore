import React from 'react'

export default class SearchBar extends React.Component {
    constructor() {
        super()

        this.state = {
            input: '',
            book: []
        }
    }

    findBook = (e) => {
        e.preventDefault()

        console.log(this.state)
    }


    render() {
        return (
            <form>
                <label htmlFor='Book'>Search:
                    <input type='text' value={this.state.input} onChange={this.findBook}></input>
                </label>
            </form>
        )
    }
} 