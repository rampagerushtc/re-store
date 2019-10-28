const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCES',
        payload: newBooks
    };
};

const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
}

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_ERROR_FAILURE',
        payload: error
    }
}

const fetchBooks = (bookstoreService, dispatch) => () => {
    console.log('Fetching Books');

    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((error) => dispatch(booksError(error)));
}

export {
    fetchBooks
};