/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Row, Col, Button, FormControl, InputGroup } from 'react-bootstrap';
// import _ from 'lodash';

const Filter = (props) => {
  const [value, setValue] = useState('');

  console.log(props);
  const handleKeyPress = e => {
    setValue(e.target.value);
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  const handleClick = () => {
    console.log('handleClick', value);
    props.setKeyword(value);
  };

  return (
    <Row>
      <Col className="mb-3">
        <InputGroup>
          <FormControl
            placeholder="Search Keyword"
            onChange={e => { setValue(e.target.value); }}
            onKeyPress={handleKeyPress}/>
          <Button variant="outline-secondary" id="button-addon2" onClick={handleClick}>
            <i className="fas fa-search" />
          </Button>
        </InputGroup>
      </Col>
    </Row>
  );
};
export default Filter;
