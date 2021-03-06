import React, {Component} from 'react';
import './book-list.css';
import BookListItem from './../book-list-item';
import { connect } from 'react-redux';
import {withStoreService} from './../hoc';
import {fetchBooksOld, bookAddedToCart} from './../../actions';
import {compose} from './../../utils';
import Spinner from './../spinner';
import ErrorIndicator from './../error-indicator';

const BookList = ({books, onAddedToCart}) => {
    return (
        <ul className='book-list'>
            {
                books.map((book)=>{
                    return (
                        <li key={book.id}><BookListItem book={book} onAddedToCard={() => onAddedToCart(book.id)}/></li>
                    )
                })
            }
        </ul>
    )
};

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    };

    render () {
        const {books, loading, error, onAddedToCart} = this.props;
        if (loading) {
            return <Spinner />
        }
        if (error) {
            return <ErrorIndicator />
        }
        return <BookList books={books} onAddedToCart={onAddedToCart}/>;
    };
};

const mapStateToProps = ({ bookList: { books, loading, error }}) => {
    return {books, loading, error}
};

const mapDispatchToProps = (dispatch, {storeService}) => {
    return {
        fetchBooks: fetchBooksOld(storeService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
    }
};

export default compose(withStoreService(),connect(mapStateToProps, mapDispatchToProps))(BookListContainer);