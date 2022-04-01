import React, { useEffect, useState } from 'react';
import Filter from './Filter.js'
import Sort from './Sort.js';

export default function Form() {
    const [title, setTitle] = useState('')
    const [genre, setGenre] = useState('')
    const [comments, setComments] = useState([])
    const [selectedComment, setSelectedComment] = useState('')
    const [books, setBooks] = useState([])
    const [order, setOrder] = useState('')


    const getBooks = () =>  {
        fetch('http://localhost:3000/books')
            .then(response => response.json())
            .then(result => setBooks(result))
            .then(console.log)
    }

    const renderBook = () => {
        const card = filteredBooks().map(book => {
        return (
            <div className='bookCard'>
                <h1>{book.title}</h1>
                <h2>{book.genre}</h2>
            </div>)
        })
        return card
    }

    // const handleOrder = () => {
    //     order === 'ascending'? 
    // }
    const sortByAscendingOrder = (a, b) => {
        if(a.title > b.title) {
            return -1
        } else if ( a.title < b.title) {
            return 1
        } else if( a.title === b.title) {
            return 0
        }
    }

    const  sortByDescendingOrder = (a, b) => {
        if(a.title > b.title) {
            return 1
        } else if ( a.title < b.title) {
            return -1
        } else if( a.title === b.title) {
            return 0
        }
    }


    const byOrder = (a, b) => {
        if(order === 'ascending') {
            return sortByAscendingOrder (a, b)
        } else if(order === 'descending') {
            return sortByDescendingOrder(a, b)
        }
    }

    const newBooks = () => books.filter(book => {
        return (book.title.toLowerCase().includes(title.toLocaleLowerCase()))
    })

    const filteredBooks = () => {
        return newBooks().sort(byOrder)
    }

    console.log(filteredBooks())

    console.log(filteredBooks())

    const getCommenter = () => {
        fetch('http://localhost:3000/comments')
        .then(response => response.json())
        .then(result => setComments(result))
    }

    console.log(comments)

    const renderCommenter = () => comments.map(comment => {

        return <option key={comment.id} value={comment.id}>{comment.commenter}</option>
    })

    useEffect(getBooks, [])
    useEffect(getCommenter, [])

    const addCard = (event) => {
        event.preventDefault()
        const bodyInfo = {title, genre}
        const option = {
            headers : {
                Accept: "Application/json",
                "Content-Type": "Application/json"
            },
            method: "POST",
            body: JSON.stringify(bodyInfo)
        }

        fetch('http://localhost:3000/books', option)
        .then(response => response.json())
        .then(book => addBook(book))

        const addBook = (book) => {
            setBooks([...books, book])
        }
    }

    const handleFilter = (event)  => {
        const title = event.target.value
        setTitle(title)
    }


    const handleOrder = (event)  => {
        const order = event.target.value
        setOrder(order)
    }

   

    console.log(title)

  return (
      <>
        <div className="search-by-filter">
            <Filter title={title} handleFilter={handleFilter} />
        </div>
        <div className="search-by-filter">
            <Sort order={order} handleOrder={handleOrder}/>
        </div>
        <div className='cardContainer'>{renderBook()}</div>
        <form className='formContainer' onSubmit={addCard}>
            <label htmlFor='title'>Title</label>
            <input id="title" type="text" value={title} placeholder="Title" onChange={(event) => setTitle(event.target.value)}/>
            <label htmlFor='genre'>Genre</label>
            <input id="genre" type="text" value={genre} placeholder="Genre" onChange={(event) => setGenre(event.target.value)}/>
            <input id="submit" type="submit"/>
            <select id="books" type="text" value={selectedComment} onChange={(event) => setSelectedComment(event.target.value) }>
                <option>Select the option</option>
                {renderCommenter()}
            </select>
        </form>
    </>
  )
}
