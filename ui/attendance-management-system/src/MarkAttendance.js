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
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col
  } from "reactstrap";
  // core components
import AttendanceHeader from "components/Headers/AttendanceHeader";
import { useState } from "react";
  
  const MarkAttendance = () => {

    const [tid,setTeacherId]=useState('');
    const [sub,setSubject]=useState('');
    const [sid,setStudentId]=useState('');
    const [sname,setStudentName]=useState('');
    const [dt,setDate]=useState('');
    const [tme,setTime]=useState('');
    const [stat,setStatus]=useState('');



    let data = {
      teacherId:tid,
      subject:sub,
      studentId:sid,
      studentName:sname,
      date:dt,
      time:tme,
      status:stat
    };

    const markAttendance = () => {
      
      if(tid==="" || sub==="" || sid==="" || sname==="" || dt==="" || tme==="" || stat==="" ){
        window.alert("Please provide the data required !")
      }
      else{

        fetch('http://localhost:8000/api/v1/ATTENDANCE/attendance',{
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
             window.alert("Attendance Marked Successfylly");
             window.location.reload(true);
    
            }
            else{
              window.alert("Marking failed, please try again !")
            }
            
           });
          }
    
    }

    return (
      <>
        <AttendanceHeader />
        
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Mark Attendance</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Teacher ID
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="TeacherID"
                              type="text"
                              onChange={(e)=> setTeacherId(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Subject
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-text"
                              placeholder="Subject"
                              type="text"
                              onChange={(e)=> setSubject(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Student ID
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-first-name"
                              placeholder="StudentID"
                              type="text"
                              onChange={(e)=> setStudentId(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Student Name
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-last-name"
                              placeholder="Student Name"
                              type="text"
                              onChange={(e)=> setStudentName(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Date
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-city"
                              placeholder="Date"
                              type="date"
                              onClick={(e)=> setDate(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Time
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-country"
                              placeholder="time"
                              type="text"
                              onChange={(e)=> setTime(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Status
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-postal-code"
                              placeholder="present/absent"
                              type="text"
                              onChange={(e) => setStatus(e.target.value)}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <div className="pl-lg-4 text-right">
                    <Row>
                    <Col lg="6" xs="4">
                      <Button
                        color="info"
                        href="#pablo"
                        onClick={markAttendance}
                      >
                       Add Attendance
                      </Button>
                    </Col>
                    </Row>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
  
  export default MarkAttendance;
  