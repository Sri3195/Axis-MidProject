/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

import { useState } from "react";


const Login = () => {
  const [uname,setuname] = useState('');
  const [pwd, setpassword] = useState('');

  const url= new URL('http://127.0.0.1:8000/api/v1/LOGIN/login-username');

  const params={
      username:uname,
      password:pwd
  }
  url.search=new URLSearchParams(params).toString();

  //const navigate=useNavigate();
  const flag=uname.startsWith("22");
  const validate=() => {
      //alert(uname + " " + pwd + " " + pwd);
      if(uname==="" || pwd===""){
        window.alert("Please fill the credentials !")
      }
      else{
      fetch(url,{
          method:"GET",
          mode:"cors",
          headers:{
              "content-Type": "application/json",
              "Access-Control-Allow-Origin":"*",
          }
      }).then(response => response.text())
         .then((text)=> {
          if(text === "Valid User"){
            window.alert("Login Successfully");
              window.open("/admin/index","_self");
              
          }
          else{

              window.alert("Login Failed. please check your credentials.If not registed please register first.");
          }
         });
        }
  }
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small> Sign in with credentials</small>
            </div>
            <div role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="ID"
                    type="text"
                    autoComplete="new-id"
                    onChange={(e)=>setuname(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    onChange={(e)=>setpassword(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="my-4" color="primary" type="button" onClick={validate}>
                  Sign in
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={() => window.open("/auth/register","_self")}
            >
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
