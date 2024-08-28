import PropTypes from 'prop-types'
function Books(props) {

const author = props.author;
const booksList = props.books;

// booksList.sort((a, b) => a.releaseYear < b.releaseYear);

const listItems = booksList.map(b => 
                                <li key = {b.id}>Title:&nbsp;{b.title}<br />
                                    Release year:&nbsp;{b.releaseYear}<br />
                                    Genres:&nbsp;{b.genres}</li>);

return (<div className="list-container">
        <h3 className="author-header">{author}</h3>
        <ol className="books-list">{listItems}</ol>
        </div>)                                    
}

Books.propTypes = {
    author: PropTypes.string,
    books: PropTypes.arrayOf(PropTypes.shape({   id: PropTypes.number,
                                                title: PropTypes.string,
                                                releaseYear: PropTypes.number,
                                                genres: PropTypes.string,
    } ))
}

export default Books