import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>404 - Page Not Found</h1>
            <p style={styles.message}>
                Sorry, the page you are looking for does not exist.
            </p>
            <Link to="/" style={styles.link}>
                Go to Home
            </Link>
        </div>
    );
}

const styles = {
    container: {
        textAlign: "center",
        padding: "50px",
    },
    header: {
        fontSize: "36px",
        color: "#333",
    },
    message: {
        fontSize: "18px",
        color: "#666",
    },
    link: {
        fontSize: "18px",
        color: "#007BFF",
        textDecoration: "none",
    },
};

export default NotFound;
