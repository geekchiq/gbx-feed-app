import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Posts from '../components/Posts';
import Filter from '../components/Filter';
// import _ from 'lodash';

function FeedPage () {
  // const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Row className='row-cols-1'>
      <Col>
        <Filter posts={data} />
        <Posts posts={data} />
      </Col>
    </Row>
  );
}

export default FeedPage;
