import React, { Component } from 'react';
import { connect } from 'react-redux';

class Category extends Component {
  render() {
    return[
      <h1 key='1'>Category</h1>,
      <p key='2'>This is the category page</p>
    ];
  }
}


const mapStateToProps = state => ({
  posts: state.getPosts
});

// const mapDispatchToProps = dispatch => ({
//   dispatch,
//   fetchData: () => dispatch(fetchCategories())
// });

export default connect(mapStateToProps)(Category);
