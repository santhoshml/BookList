export function selectBook(book){
  // its an actionCreator and nneds t return action
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };

}
