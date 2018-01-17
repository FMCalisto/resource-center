import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class Home extends Component {
  componentWillMount() {
    this.props.fetchData()
  }
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

const mapDispatchToProps = dispatch => ({
  dispatch,
  fetchData: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
