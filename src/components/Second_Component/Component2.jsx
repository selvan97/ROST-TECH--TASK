import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Component2.css";

const Component2 = () => {
  return (
    <div className="customize_component2 container my-5">
      <Form className="customize_form p-4">
        <Row>
          <Col xs={12} sm={6} md={6} lg={3}>
            <Form.Group controlId="destination">
              <Form.Label className="for_style">Destinations:</Form.Label>
              <Form.Select
                className="for_style2"
                aria-label="Default select example"
              >
                <option>Destination</option>
                <option value="1">Australia</option>
                <option value="2">Europe</option>
                <option value="3">London</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col xs={12} sm={6} md={6} lg={3}>
            <Form.Group controlId="dateRange">
              <Form.Label className="for_style">Check In-Check Out:</Form.Label>
              <Form.Control
                className="for_style2"
                type="text"
                placeholder="DD/MM/YYYY - DD/MM/YYYY"
              />
            </Form.Group>
          </Col>

          <Col xs={12} sm={6} md={6} lg={3}>
            <Form.Group controlId="roomsGuests">
              <Form.Label className="for_style">
                No. of Persons:
              </Form.Label>
              <Form.Control className="mb-1 for_style2" as="select">
                <option>1 Room(s) 1 Guest(s)</option>
                <option>2 Room(s) 2 Guest(s)</option>
                <option>3 Room(s) 3 Guest(s)</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Col xs={12} sm={6} md={6} lg={3} className="customize_btn">
            <div className="w-100 p-1 for_button">
              <Button variant="dark" type="submit" size="sm" className="w-100 ">
                Search
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Component2;
