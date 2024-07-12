import React, { useState, useEffect } from "react";

import api from "../api";
import "../styles/Book.css";

function Books() {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const accessToken = localStorage.getItem("access_token");
                const response = await api.get(
                    "http://localhost:8000/api/book/",
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );
                setBooks(response.data);
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    setError("Unathorized access. Please log in.");
                } else {
                    setError("An error occured. Please try again later.");
                }
            }
        };

        fetchBooks();
    }, []);

    return (
        <div className="page">
            <h1>Books</h1>
            {error && <p className="error">{error}</p>}
            <ul className="book-list">
                {books && books.length > 0 ? (
                    books.map((book) => (
                        <li className="book-item" key={book.id}>
                            <h2>{book.title}</h2>
                            <p>
                                <strong>Author:</strong>{" "}
                                {book.author.user.first_name}{" "}
                                {book.author.user.last_name}
                            </p>
                            <p>
                                <strong>Category:</strong> {book.category.name}
                            </p>
                            <p>
                                <strong>Pages:</strong> {book.pages}
                            </p>
                            <p>
                                <strong>Price:</strong> ${book.price}
                            </p>
                            <p>
                                <strong>Shelf:</strong> {book.shelf.name}
                            </p>
                            <p>
                                <strong>Content:</strong> {book.content}
                            </p>
                        </li>
                    ))
                ) : (
                    <p className="no-books">No books available.</p>
                )}
            </ul>
        </div>
    );
}

export default Books;
