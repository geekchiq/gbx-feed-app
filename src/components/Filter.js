/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import _ from 'lodash';

const FiltePage = ({ posts }) => {
  const options = _.chain(posts).map('userId').uniq().value();

  const [userId, setUserId] = useState(options[0]);
  console.log('FiltePage', userId);

  return (
    <Row className='row-cols-2'>
      <form>
        <Col>
          <Form.Select size="sm" onChange={e => setUserId(e.target.value)} value={userId}>
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
