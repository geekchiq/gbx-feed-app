/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
// import _ from 'lodash';

const Filter = (props) => {
  console.log(props);
  const [userId, setUserId] = useState(props.selectOptions[0]);
  const [sort, setSort] = useState('asc');

  const handleChange = (e) => {
    const value = e.target.value;
    setUserId(value);
    props.setFilter({ userId: value, sort: sort });
  };

  const handleClick = () => {
    if (sort === 'asc') {
      setSort('desc');
    } else if (sort === 'desc') {
      setSort('asc');
    }
    props.setFilter({ userId: userId, sort: sort });
  };

  return (
    <Row>
      <form>
        <Col>
          Filter ID:
          <Form.Select size="sm" onChange={handleChange} value={userId}>
            <option key='' value=''></option>
            {props.selectOptions.map(o => (
              <option key={o} value={o}>{o}</option>
            ))}
          </Form.Select>
        </Col>
        <Col> <Button onClick={handleClick}>Sort <i className="fas fa-sort"></i></Button></Col>
      </form>
    </Row>
  );
};
export default Filter;
