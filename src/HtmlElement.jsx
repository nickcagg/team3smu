import React from "react";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Row } from "react-bootstrap";

export default function HtmlElement() {
  const [visible, setVisible] = React.useState(false);
  const [value, setValue] = React.useState(undefined);
  const [value2, setValue2] = React.useState(undefined);
  const [checked, setChecked] = React.useState(false);

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar style={{ backgroundColor: "#0a1650" }} expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              style={{ filter: "brightness(0) invert(1)" }}
              src="https://preview.uxpin.com/external-url"
              alt="Singapore Management University Logo"
              height="60"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                style={{ color: "#ffffff", marginLeft: "15px" }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                style={{ color: "#ffffff", marginLeft: "15px" }}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#academics"
                style={{ color: "#ffffff", marginLeft: "15px" }}
              >
                Academics
              </Nav.Link>
              <Nav.Link
                href="#research"
                style={{ color: "#ffffff", marginLeft: "15px" }}
              >
                Research
              </Nav.Link>
              <Nav.Link
                href="#admissions"
                style={{ color: "#ffffff", marginLeft: "15px" }}
              >
                Admissions
              </Nav.Link>
              <Nav.Link
                href="#contact"
                style={{ color: "#ffffff", marginLeft: "15px" }}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid="true" className="p-0" style={{ flex: "1 0 auto" }}>
        <Row className="m-0" style={{ height: "100%" }}>
          <Col md="7" className="p-0 d-none d-md-block">
            <div
              style={{
                backgroundImage:
                  "url('https://picsum.photos/1000/1200?random=1')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(10, 22, 80, 0.75)",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "40px",
                }}
              >
                <div
                  style={{
                    maxWidth: "500px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <h1
                    style={{
                      color: "#ffffff",
                      fontWeight: "600",
                      marginBottom: "20px",
                      fontSize: "2.5rem",
                    }}
                  >
                    Welcome to Singapore Management University
                  </h1>
                  <p
                    style={{
                      color: "#ffffff",
                      fontSize: "1.1rem",
                      lineHeight: "1.6",
                    }}
                  >
                    Singapore Management University (SMU) is internationally
                    recognized for its world-class research and distinguished
                    teaching. We are known for our interactive and
                    technologically enabled pedagogy of seminar-style teaching
                    in small-sized classes.
                  </p>
                  <div style={{ marginTop: "30px" }} />
                </div>
              </div>
            </div>
          </Col>
          <Col md="5" className="p-0">
            <div
              style={{
                height: "100%",
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "40px",
              }}
            >
              <div
                style={{
                  maxWidth: "400px",
                  width: "100%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <div style={{ textAlign: "center", marginBottom: "40px" }}>
                  <h2
                    style={{
                      color: "#0a1650",
                      marginTop: "20px",
                      fontWeight: "600",
                    }}
                  >
                    Sign In
                  </h2>
                  <p style={{ color: "#666666" }}>
                    Access your SMU services and resources
                  </p>
                </div>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ color: "#0a1650", fontWeight: "500" }}>
                      Email Address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email address"
                      style={{
                        borderColor: "#cccccc",
                        padding: "12px",
                        borderRadius: "4px",
                      }}
                      value={value}
                      onChange={(...args) => {
                        let value = args[0].target.value;
                        setValue(value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label style={{ color: "#0a1650", fontWeight: "500" }}>
                      Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      style={{
                        borderColor: "#cccccc",
                        padding: "12px",
                        borderRadius: "4px",
                      }}
                      value={value2}
                      onChange={(...args) => {
                        let value2 = args[0].target.value;
                        setValue2(value2);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Remember me"
                      style={{ color: "#0a1650" }}
                      checked={checked}
                      onChange={(...args) => {
                        let checked = args[0].target.checked;
                        setChecked(checked);
                      }}
                    />
                  </Form.Group>
                  <Button
                    style={{
                      backgroundColor: "#a18347",
                      borderColor: "#a18347",
                      padding: "12px",
                      width: "100%",
                      fontWeight: "500",
                      marginBottom: "20px",
                    }}
                  >
                    Sign In
                  </Button>
                  <div style={{ textAlign: "center" }}>
                    <a
                      style={{
                        color: "#0a1650",
                        textDecoration: "none",
                        fontWeight: "500",
                      }}
                      href="#forgotpassword"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <hr style={{ margin: "30px 0" }} />
                  <div style={{ textAlign: "center" }}>
                    <p style={{ color: "#666666", marginBottom: "20px" }}>
                      Need help? Contact
                    </p>
                    <a
                      style={{
                        color: "#a18347",
                        textDecoration: "none",
                        fontWeight: "500",
                      }}
                      href="#contact"
                    >
                      IT Help Desk
                    </a>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <footer
        style={{
          backgroundColor: "#0a1650",
          color: "#ffffff",
          padding: "15px 0",
          textAlign: "center",
        }}
      >
        <Container>
          <p style={{ margin: "0", fontSize: "14px" }}>
            © 2025 Singapore Management University. All Rights Reserved.
          </p>
        </Container>
      </footer>
    </div>
  );
}
