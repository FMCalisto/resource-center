import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return[
      <h1 key='1'>Home</h1>,
      <p key='2'>This is the home page</p>
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

export default connect(mapStateToProps)(Home);
