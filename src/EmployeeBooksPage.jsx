import React, { useState, useEffect } from 'react';
import "./EmployeeBooksPage.css"

const EmployeeBooksPage = () => {
  // States for managing data
  const [books, setBooks] = useState([]); // All books
  const [history, setHistory] = useState([]); // Borrowed book history
  const [newBook, setNewBook] = useState({ title: '', author: '' }); // New book input

  // Fetch books and history data on load
  useEffect(() => {
    fetch('/books.json') // Ensure this file exists in the public folder
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.books || []);
        setHistory(data.history || []);
      })
      .catch((error) => console.error('Error loading data:', error));
  }, []);

  // Add a new book
  const handleAddBook = () => {
    if (!newBook.title || !newBook.author) {
      alert('Please fill in all fields.');
      return;
    }

    const updatedBooks = [
      ...books,
      { id: books.length + 1, title: newBook.title, author: newBook.author }
    ];
    setBooks(updatedBooks);
    setNewBook({ title: '', author: '' });
    console.log('Book added:', updatedBooks);
  };

  // Borrow a book (move to history)
  const handleBorrowBook = (bookId) => {
    const bookToBorrow = books.find((book) => book.id === bookId);
    if (bookToBorrow) {
      const updatedBooks = books.filter((book) => book.id !== bookId);
      const updatedHistory = [
        ...history,
        { ...bookToBorrow, borrowedDate: new Date().toISOString().split('T')[0] }
      ];
      setBooks(updatedBooks);
      setHistory(updatedHistory);
      console.log('Book borrowed:', bookToBorrow);
    }
  };

  return (
    <div className="employee-page">
      <h1>Employee Books Page</h1>

      {/* Add a New Book Section */}
      <section className="add-book">
        <h2>Add a New Book</h2>
        <input
          type="text"
          placeholder="Book Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </section>

      {/* View Available Books */}
      <section className="available-books">
        <h2>Available Books</h2>
        {books.length > 0 ? (
          <ul>
            {books.map((book) => (
              <li key={book.id}>
                <strong>{book.title}</strong> by {book.author}{' '}
                <button onClick={() => handleBorrowBook(book.id)}>Borrow</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No books available.</p>
        )}
      </section>

      {/* View Borrowed Books History */}
      <section className="borrowed-history">
        <h2>Borrowed Books History</h2>
        {history.length > 0 ? (
          <ul>
            {history.map((record) => (
              <li key={record.id}>
                <strong>{record.title}</strong> by {record.author} (Borrowed on: {record.borrowedDate})
              </li>
            ))}
          </ul>
        ) : (
          <p>No books borrowed yet.</p>
        )}
      </section>
    </div>
  );
};

export default EmployeeBooksPage;
