import "./App.css";
import { Nav, Card, ListGroup, Form, Row, Col, Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav fill variant="tabs" defaultActiveKey="/link-3">
          <Nav.Item>
            <Nav.Link eventKey="home">Accueil</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/link-3">Sign up</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">About us</Nav.Link>
          </Nav.Item>
          
        </Nav>

        <Form className="formulaire">
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="4">
              First Name
            </Form.Label>
            <Col sm="8">
              <Form.Control type="text" placeholder="First Name " />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="4">
              Last Name
            </Form.Label>
            <Col sm="8">
              <Form.Control type="text" placeholder="Last Name " />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="4">
              Email
            </Form.Label>
            <Col sm="8">
              <Form.Control type="email" placeholder="exemple@exemple.com" />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="4">
              Password
            </Form.Label>
            <Col sm="8">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="4">
              Confirm Password
            </Form.Label>
            <Col sm="8">
              <Form.Control type="password" placeholder="Confirm  Password" />
            </Col>
          </Form.Group>
          <Button className="btn" variant="primary">
            Sign up
          </Button>
        </Form>
      </header>
    </div>
  );
}

export default App;
