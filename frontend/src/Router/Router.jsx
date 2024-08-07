import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "../pages/Register";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Books from "../components/Book";

import ProtectedRoute from "../components/ProtectedRoute";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import BookDetail from "../components/BookDetail/BookDetail";

function Logout() {
    localStorage.clear();
    return <Navigate to="/login" />;
}

function RegisterAndLogout() {
    localStorage.clear();
    return <Register />;
}

export default function Router() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/books" element={<Books />} />
                <Route path="/book/:id" element={<BookDetail />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
