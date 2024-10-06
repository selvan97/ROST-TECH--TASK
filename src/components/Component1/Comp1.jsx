import React from "react";
import { Carousel, Navbar, Nav, Container, Button } from "react-bootstrap";
import pic1 from "../../assets/bg1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Comp1.css";

const Comp1 = () => {
  return (
    <div className="customize_carousel">
      <Carousel>
        <Carousel.Item>
          <div className="custom_comp1_img">
            <img className="d-block w-100" src={pic1} alt="First slide" />
          </div>

          {/* caption1 */}
          <Carousel.Caption className="custom1_caption">
            <div className="custom1_caption">
              <Navbar expand="lg" className="customize_navbar">
                <Container>
                  <Navbar.Brand
                    href="#home"
                    className="navbar-brand spaced-brand"
                  >
                    HiStay
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#home" className="nav-link">
                        Home
                      </Nav.Link>
                      <Nav.Link href="#about" className="nav-link">
                        About Us
                      </Nav.Link>
                      <Nav.Link href="#destination" className="nav-link">
                        Destination
                      </Nav.Link>
                      <Nav.Link href="#packages" className="nav-link">
                        Packages
                      </Nav.Link>
                      <Nav.Link href="#contact" className="nav-link">
                        Contact Us
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          </Carousel.Caption>

          {/* caption2 */}
          <Carousel.Caption className="custom2_caption">
            <h1>Plan Your Dream Holiday With HiStay</h1>
            <Button
              variant="outline-primary"
              className="custom_button my-5 px-5 py-3"
              onClick={() => window.location.reload()}
            >
              Book Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Item here for additional slides */}
        <Carousel.Item>
          <div className="custom_comp1_img">
            <img className="d-block w-100" src={pic1} alt="First slide" />
          </div>

          {/* caption1 */}
          <Carousel.Caption className="custom1_caption">
            <div className="custom1_caption">
              <Navbar expand="lg" className="customize_navbar">
                <Container>
                  <Navbar.Brand
                    href="#home"
                    className="navbar-brand spaced-brand"
                  >
                    HiStay
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#home" className="nav-link">
                        Home
                      </Nav.Link>
                      <Nav.Link href="#about" className="nav-link">
                        About Us
                      </Nav.Link>
                      <Nav.Link href="#destination" className="nav-link">
                        Destination
                      </Nav.Link>
                      <Nav.Link href="#packages" className="nav-link">
                        Packages
                      </Nav.Link>
                      <Nav.Link href="#contact" className="nav-link">
                        Contact Us
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          </Carousel.Caption>

          {/* caption2 */}
          <Carousel.Caption className="custom2_caption">
            <h1>Plan Your Dream Holiday With HiStay</h1>
            <Button
              variant="outline-primary"
              className="custom_button my-5 px-5 py-3"
              onClick={() => window.location.reload()}
            >
              Book Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="custom_comp1_img">
            <img className="d-block w-100" src={pic1} alt="First slide" />
          </div>

          {/* caption1 */}
          <Carousel.Caption className="custom1_caption">
            <div className="custom1_caption">
              <Navbar expand="lg" className="customize_navbar">
                <Container>
                  <Navbar.Brand
                    href="#home"
                    className="navbar-brand spaced-brand"
                  >
                    HiStay
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#home" className="nav-link">
                        Home
                      </Nav.Link>
                      <Nav.Link href="#about" className="nav-link">
                        About Us
                      </Nav.Link>
                      <Nav.Link href="#destination" className="nav-link">
                        Destination
                      </Nav.Link>
                      <Nav.Link href="#packages" className="nav-link">
                        Packages
                      </Nav.Link>
                      <Nav.Link href="#contact" className="nav-link">
                        Contact Us
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          </Carousel.Caption>

          {/* caption2 */}
          <Carousel.Caption className="custom2_caption">
            <h1>Plan Your Dream Holiday With HiStay</h1>
            <Button
              variant="outline-primary"
              className="custom_button my-5 px-5 py-3"
              onClick={() => window.location.reload()}
            >
              Book Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Comp1;
