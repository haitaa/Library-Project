import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./BookDetail.css";

export default function BookDetail() {
    const { id } = useParams();
    const [book, setBook] = useState();

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await fetch(
                    `http://localhost:8000/api/book/${id}`
                );
                const data = await response.json();
                console.log(data);
                setBook(data);
            } catch (error) {
                console.error("Error fetching book: ", error);
            }
        };
        fetchBook();
    }, [id]);

    if (!book) {
        return <div className="container">Loading...</div>;
    }

    return (
        <div className="container book-detail">
            <div className="book-detail-header">
                <h1>{book.title}</h1>
            </div>
            <div className="book-detail-content">
                <div className="book-detail-image">
                    <img src={book.book_image} alt={book.title} />
                </div>
                <div className="book-detail-info">
                    <p>
                        <strong>Author:</strong> {book.author.user.username}
                    </p>
                    <p>
                        <strong>Pages:</strong> {book.pages}
                    </p>
                    <p>
                        <strong>Category:</strong> {book.category.name}
                    </p>
                    <p>
                        <strong>Shelf:</strong> {book.shelf.id}
                    </p>
                    <p>
                        <strong>Price:</strong> ${book.price}
                    </p>
                    <p>{book.content}</p>
                </div>
            </div>
        </div>
    );
}
