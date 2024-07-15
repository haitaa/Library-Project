import { useState, useEffect } from "react";
import api from "../api.js";

function fetchDataFromBackend() {
    const [booksData, setBooksData] = useState([]);

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
                setBooksData(response.data);
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

    return booksData;
}

export default fetchDataFromBackend;
