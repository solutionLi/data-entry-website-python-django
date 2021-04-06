/*!

=========================================================
* Light Bootstrap Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  FormLabel,
  FormControl,
  FormText,
} from "react-bootstrap";
import { Link } from "react-router-dom"
import Card from "components/Card/Card.jsx";

import Button from "components/CustomButton/CustomButton.jsx";
import Checkbox from "components/CustomCheckbox/CustomCheckbox.jsx";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardHidden: true
    };
  }
  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ cardHidden: false });
      }.bind(this),
      700
    );
  }
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }} sm={{ span: 6, offset: 3 }}>
            <form>
              <Card
                hidden={this.state.cardHidden}
                textCenter
                title="Login"
                content={
                  <div>
                    <FormGroup>
                      <FormLabel>Email address</FormLabel>
                      <FormControl placeholder="Enter email" type="email" />
                    </FormGroup>
                    <FormGroup>
                      <FormLabel>Password</FormLabel>
                      <FormControl placeholder="Password" type="password" autoComplete="off"/>
                    </FormGroup>
                  </div>
                }
                legend={
                  <FormGroup>
                    <Button bsStyle="info" fill wd>
                      Login
                    </Button>
                    <FormText className="text-dark">Don't you have an account? <Link to="/auth/register-page"> Register</Link></FormText>
                  </FormGroup>
                }
                ftTextCenter
              />
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoginPage;
