import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import FeedPage from './components/FeedPage';
import FilterPage from './components/FilterPage';

class App extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <h1>Feed</h1>
          </MDBCol>
        </MDBRow>
        <FilterPage posts={this.state.posts}/>
        <FeedPage posts={this.state.posts} />
      </MDBContainer>
    );
  }

  state = {
    posts: []
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then((data) => {
        this.setState({ posts: data })
      })
      .catch(console.log)
  }
}

export default App;