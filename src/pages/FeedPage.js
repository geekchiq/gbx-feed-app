import React, { useEffect } from 'react';
import _ from 'lodash';
import { Row, Col } from 'react-bootstrap';
import Posts from '../components/Posts';
import Filter from '../components/Filter';
// import _ from 'lodash';

function FeedPage () {
  // const [isLoading, setIsLoading] = React.useState(true);
  const [dataOriginal, setDataOriginal] = React.useState([]);
  const [data, setData] = React.useState([]);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json)
        setDataOriginal(json)
      })
      .catch((error) => console.log(error));
  }, []);
  const filteredDataByUserId = (value) => {
    const filteredUserId = dataOriginal.filter((item) => item.userId === parseInt(value))
    setData(filteredUserId)
  }
  const options = _.chain(dataOriginal).map('userId').uniq().value();
  return (
    <Row className='row-cols-1'>
      <Col>
        <Filter filteredDataByUserId={filteredDataByUserId} options={options} />
        <Posts posts={data} />
      </Col>
    </Row>
  );
}

export default FeedPage;
