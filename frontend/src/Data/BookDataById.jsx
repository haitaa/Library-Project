async function fetchDataBookById(id) {
    try {
        const response = await fetch(`http://localhost:8000/api/book/${id}/`);
        if (!response.ok) {
            throw new Error(`Error fetching book with id ${id}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching book:", error);
        return null;
    }
}

export default fetchDataBookById;
