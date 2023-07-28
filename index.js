// Function to fetch the books from the API and render them on the webpage
function fetchBooks() {
  const url = 'https://anapioficeandfire.com/api/books';

  return fetch(url)
    .then(response => response.json())
    .then(data => renderBooks(data))
    .catch(error => console.error('Error:', error));
}

// Function to render the books on the webpage
function renderBooks(books) {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = ""; // Clear the list before rendering

  books.forEach(book => {
    const bookTitle = document.createElement('li');
    bookTitle.innerText = book.name;
    bookList.appendChild(bookTitle);
  });
}

// Call fetchBooks() when index.html is loaded
window.addEventListener('DOMContentLoaded', fetchBooks);

// Assuming I have Chai and Chai Spies set up
const expect = chai.expect;

describe('Test for fetchBooks()', () => {
  it('should render book titles into the DOM by passing a JSON object to renderBooks()', async () => {
    // Arrange: Spy on the actual renderBooks function
    const renderBooksSpy = chai.spy.on(window, 'renderBooks');

    // Act: Call fetchBooks()
    await fetchBooks();

    // Assert: Check if renderBooks() has been called
    expect(renderBooksSpy).to.have.been.called();
  });
});

