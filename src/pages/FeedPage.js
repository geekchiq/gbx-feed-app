import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Posts from '../components/Posts';
import Filter from '../components/Filter';
import _ from 'lodash';

function FeedPage () {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [filter, setFilter] = useState({ userId: '', sort: 'asc' });
  const baseurl = 'https://jsonplaceholder.typicode.com/posts';
  console.log('filter', filter);
  useEffect(() => {
    const endpoint = !_.isEmpty(filter.userId) ? baseurl + '?userId=' + filter.userId : baseurl;
    console.log('endpoint', endpoint);
    fetch(baseurl)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));

    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => setFilterData(json))
      .catch((error) => console.log(error));
    console.log('filterData', filterData);
  }, [filter.userId]);

  useEffect(() => {
    handleSort();
  }, [filterData, filter.sort]);

  const options = _.chain(data).map('userId').uniq().value();

  function handleSort () {
    if (filter.sort === 'asc') {
      const tempData = filterData.sort((a, b) => {
        const fa = a.title.toLowerCase();
        const fb = b.title.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      console.log('tempData', tempData);
      setFilterData(tempData);
    } else {
      const tempData = filterData.sort((a, b) => {
        const fa = a.title.toLowerCase();
        const fb = b.title.toLowerCase();

        if (fa < fb) {
          return 1;
        }
        if (fa > fb) {
          return -1;
        }
        return 0;
      });
      console.log('tempData', tempData);
      setFilterData(tempData);
    }
  }
  return (
    <Row className='row-cols-1'>
      <Col>
        <Filter posts={data} selectOptions={options} setFilter={setFilter}/>
        <Posts posts={filterData} />
      </Col>
    </Row>
  );
}

export default FeedPage;
