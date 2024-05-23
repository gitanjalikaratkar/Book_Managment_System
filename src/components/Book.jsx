import { useState } from 'react'
import './Book.css'

function Book(props) {
    let [isUpdating, setIdUpdating] = useState(false);
    let [updatedTitle, setUpdatedTitle] = useState(props.title)
    let [updatedAuthor, setUpdatedAuthor] = useState(props.author)
    let [updatedPrice, setUpdatedPrice] = useState(props.price)

    function handleTitleChnage(event) {
        setUpdatedTitle(event.target.value)
    }
    function handleAuthorChnage(event) {
        setUpdatedAuthor(event.target.value)
    }
    function handlePriceChnage(event) {
        setUpdatedPrice(event.target.value)
    }

    function handleUpdate() {
        let book
        if (isUpdating) {
            book = {
                id: props.id,
                title: updatedTitle,
                author: updatedAuthor,
                price: updatedPrice
            }
            fetch(`http://localhost:8000/books/${props.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            })
                .then(() => {
                    let newBooks = [...props.books];
                    newBooks.map(
                        (element, idx) => {
                            if (element.id === book.id) {
                                newBooks.splice(idx, 1, book);
                            }
                        }
                    )

                    props.setBooks(newBooks);
                    setIdUpdating(false);
                })
        }
        else {
            setIdUpdating(true);
        }
    }

    return (
          <div className="book-container">
             <span id='container-data1' className="book-data">{props.id}</span>
             {
                 isUpdating ? <input type="text" className="input-data" id='input-data2' value={updatedTitle} onChange={handleTitleChnage} /> : <span id='container-data2' className="book-data">{props.title}</span>
             }
             {
                 isUpdating ? <input type="text" className="input-data" id='input-data3' value={updatedAuthor} onChange={handleAuthorChnage} /> : <span id='container-data3' className="book-data">{props.author}</span>
             }
             {
                 isUpdating ? <input type="text" className="input-data" id='input-data4' value={updatedPrice} onChange={handlePriceChnage} /> : <span id='container-data4' className="book-data">{props.price}</span>
             }
 
 
             <button id='btnRemove' onClick={() => { props.handleRemove(props.id) }}>Remove</button>
             <button id='btnUpdate' onClick={handleUpdate}>
                 {
                     isUpdating ? "Save" : "Update"
                 }
             </button>
         </div> 

       

    )
}

export default Book;


/* 
let book
        if (isUpdating == true) {
            book = {
                id: props.id,
                title: updatedTitle,
                author: updatedAuthor,
                price: updatedPrice
            }
            
            let newBooks = [...props.books];
            newBooks.map(
                (element, idx) => {
                    if (element.id == book.id) {
                        newBooks.splice(idx, 1, book);
                    }
                }
            )

            props.setBooks(newBooks);
            setIdUpdating(false)
        }
        else {
            setIdUpdating(true)
        }
*/
