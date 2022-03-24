/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import _ from 'lodash';

const FiltePage = ({ filteredDataByUserId,options }) => {
  const handleOnChange = (e) =>{
    filteredDataByUserId(e.target.value)
  }

  return (
    <Row className='row-cols-2'>
      <form>
        <Col>
          <Form.Select size="sm" onChange={handleOnChange}>
            {options.map(o => (
              <option key={o} value={o}>{o}</option>
            ))}
          </Form.Select>
        </Col>
      </form>
    </Row>
  );
};
export default FiltePage;
