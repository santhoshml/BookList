import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{

  renderList(){
    return this.props.books.map((book)=>{
      return (
        <li
        key={book.tlte}
        onClick={()=>this.props.selectBook(book)}
        className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state){
  // what ever gets returns here will showup as props in BookList
  return {
    books: state.books
  }
}

// anything returns from this ends as props as BookList containers
function mapDispatchToProps(dispatch){
  // when ever selectBook is called, the resullt should be passed to all of our reducers
  return bindActionCreators({selectBook : selectBook}, dispatch);
}

// connect takes and function and component and passes it to the container
// promote BookList from a compoenet to a container, it needs to know about this new dispatch method, selectBook.
// Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
