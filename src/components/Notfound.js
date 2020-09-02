import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
/**
 * Notfound component
 *
 * @description The NotFound component will be rendered when a user visit an url with a non existent poll id or another wrong url. It's just a soft 404 and doesn't actually return a 404 http error code.
 * @export Component
 * @returns Children components
 */
export default function Notfound() {
  return (
    <Container as="main">
      <Row className="mt-4">
        <Col className="text-center">
          <h2 className="mt-4">Not found 404</h2>
        </Col>
      </Row>
    </Container>
  );
}
