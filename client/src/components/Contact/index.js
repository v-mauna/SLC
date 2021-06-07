import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Calendar from "react-calendar";
import './style.css'

function Contact(props) {
  return (
      <div>
        <div className={"calendar"}>
        <Card>
            <Card.Header className="text-center">Schedule your free estimate</Card.Header>
            <Card.Body className="text-center">
              <Calendar/>
            </Card.Body>
        </Card>
        </div>
        <div className="col-10 mx-auto p-5">
          <Card>
            <Card.Header className="text-center">Send us a message</Card.Header>
            <Form className="p-3">
              <Row className="mb-3">
                <Form.Label>Name</Form.Label>
                <Col>
                  <Form.Control placeholder="First name" />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" />
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Questions/Comments</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter Questions or Comments"/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card>
        </div>
          <div className="col-10 mx-auto p-5">
              <Card>
                  <Card.Header className="text-center">Contact Us</Card.Header>
                  <Card.Body className="text-center">
                      To reach out to us about a job or an issue, please
                      <a href={"mailto:sparxlanwncare@gmail.com?subject=Lawncare Services"}> email us</a> or call us at <a href="tel:1-800-sparx-lwn">1-800-Sparx-Lwn</a>.
                  </Card.Body>
              </Card>
          </div>
      </div>
  );
}

export default Contact;
