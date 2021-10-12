import React, { useState, useEffect } from 'react'
import axios from 'axios'

const BooksList = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        axios.get('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=QNqjc3MwS7DqUCGxtTNMNqFHPSKu6zkG')
        .then(res => {
          const data = res.data;
          setBooks(data)
        })
    }, [books])

    const booksList = () => {
        books.map((book, index) => {
            return (
                <div key={index}>
                    <h3>{book.display_name}</h3>
                </div>
            )
        })
    }

    return (
        <div style={{ marginTop: '48px', display: 'flex', justifyContent: 'center' }}>
            <h1>Top 50 Books</h1>
            {booksList}
        </div>
    )
}

export default BooksList