// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/Searchpage.Jsx";
// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/Searchbar/Searchbar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useState } from "react";

function App() {
  const [Book, setBook] = useState([]);
  const [activeIndex, setactiveIndex] = useState(-1);
  const fetchSearchResults= async => 
  // // const filterbooks = (searchvalue) => {
  // //   let filterBooks = book.filter(books) => books.id
  // }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/add"
          element={
            <PrivateRoute>
              <Book />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage setBook={setBook} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
