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
  Col
} from "reactstrap";

import { useState } from "react";
const Register = () => {
  const [uname,setuname] = useState('');
    const [pwd, setpassword] = useState('');
    const [confirm,confirmpassword] = useState('');


    //const navigate = useNavigate();
    const register=() => {
        //alert(uname + " " + pwd + " " + pwd);
        if(uname === "" || pwd==="" || confirm===""){
          window.alert("Please provide the data required !");
        }
        else if(pwd!==confirm){
          window.alert("Passwords should match !")
        }

        else{
        let data = {
            username: uname,
            password: pwd,
            confirmPassword: confirm
        };
        fetch('http://localhost:8000/api/v1/LOGIN/signup',{
            method:"POST",
            mode:"cors",
            body: JSON.stringify(data),
            headers:{
                "content-Type": "application/json",
                "Access-Control-Allow-Origin":"*",
            }
        }).then(response => response.text())
           .then((text) => {
            if(text === "Added"){
             window.alert("Registered Successfully, please login");
             //navigate('/students')
             window.open("/auth/login","_self")
            }
            else if (text==="Failed"){
              window.alert("Username already exists");
            }
            else{
              window.alert("Registration failed, please try again !")
            }
            
           });
        }
    }
  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign up with credentials</small>
            </div>
            <div role="form">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="ID" type="text"  onChange={(e)=>setuname(e.target.value)}/>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="password"
                    type="password"
                    autoComplete="new-password"
                    onChange={(e)=>setpassword(e.target.value)}
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
                    placeholder="Confirm password"
                    type="password"
                    autoComplete="new-password"
                    onChange={(e)=>confirmpassword(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="mt-4" color="primary" type="button" onClick={register}>
                  Create account
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
