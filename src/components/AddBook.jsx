import React, { useState } from 'react';
import './AddBook.css'

function AddBook(props) {
    const [enteredId, setEnteredId] = useState("");
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");
    const [enteredPrice, setEnteredPrice] = useState("");

    function handleValidateId(event) {

        fetch('http://localhost:8000/books')
            .then((response) => {
                return response.json();
            })
            .then((book) => {
                book.filter(
                    (element) => {
                        if (event.target.value === element.id) {
                            setEnteredId("");
                            return alert("Please entered another Id. This id already in used");
                        }
                    }
                )
            })
    }

    function handleChangeId(event) {
        setEnteredId(event.target.value);
    }
    function handleChangeTitle(event) {
        setEnteredTitle(event.target.value);
    }

    function handleChangeAuthor(event) {
        setEnteredAuthor(event.target.value);
    }

    function handleChangePrice(event) {
        setEnteredPrice(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        let book = {
            id: enteredId,
            title: enteredTitle,
            author: enteredAuthor,
            price: enteredPrice
        }

        props.handleSubmit(book);

        setEnteredId("");
        setEnteredTitle("");
        setEnteredAuthor("");
        setEnteredPrice("");
    }

    return (
        <div className="form-container">
            <form className='form-div' onSubmit={handleSubmit}>
                <span id='span1'>
                    <label >Id : </label>
                    <input type="text" id='textId' onChange={handleChangeId} onBlur={handleValidateId} className='enteredInput' value={enteredId} required />
                </span>
                <span id='span2'>
                    <label>Title : </label>
                    <input type="text" id='textTitle' onChange={handleChangeTitle} className='enteredInput' value={enteredTitle} required />
                </span>
                <span id='span3'>
                    <label> Author : </label>
                    <input type="text" id='textAuthor' onChange={handleChangeAuthor} className='enteredInput' value={enteredAuthor} required />
                </span>
                <span id='span4'>
                    <label>Price : </label>
                    <input type="text" id='textPrice' onChange={handleChangePrice} className='enteredInput' value={enteredPrice} required />
                </span>
                <button type="submit" id='btnAdd' >Add</button>
            </form>
        </div>
    )
}

export default AddBook