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
import React from "react";

// reactstrap components
import { Card, 
  Container, 
  Row ,
  Col, 
  CardHeader, 
  Button,
   Table,
 CardTitle,
 CardBody,
 FormGroup,
 InputGroup,
 InputGroupAddon,
 InputGroupText,
 Input,
 Navbar,
  Form,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  DropdownMenu,
  DropdownItem,

} from "reactstrap";

// core components
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Students = () => {

  const [students,setStudents]=useState([]);
  const [id,setStudentId]=useState('');
    const [name,setStudentName]=useState('');
    const [section1,setSection]=useState('');

    let data = {
      studentId: id,
      studentName: name,
      section: section1
    };

  const url=new URL('http://localhost:8000/api/v1/STUDENT/student-update');
  const params={
    studentId:id
 }
 url.search=new URLSearchParams(params).toString();

 const updateStudent = (sid) => {

  //student.id=studentId
  //student.name=studentName
  //student.sec=section
  if(id!== sid){
    window.alert("Id should be matched");
  }
  else if(id==="" || name==="" || section1==="" ){
    window.alert("Please provide the data required !");
  }
  else{
    fetch(url,{
        method:"PUT",
        mode:"cors",
        body: JSON.stringify(data),
        headers:{
            "content-Type": "application/json",
            "Access-Control-Allow-Origin":"*",
        }
    }).then(response => response.text())
       .then((text) => {
        if(text === "Updated"){
         window.alert("Student Updated Successfully");
         window.location.reload(true);

        }
        else{
          window.alert("Updation failed, please try again !")
        }
        
       });
      }

}
  

  useEffect(() => {

    axios.get('http://localhost:8000/api/v1/STUDENT/get-students').then(res =>{
         //console.log(res)
        setStudents(res.data);
        })
},[])



const addStudent =()=>{
  if(id==="" || name==="" || section1==="" ){
    window.alert("Please provide the data required !");
  }
  else{
  fetch('http://localhost:8000/api/v1/STUDENT/add-student',{
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
       window.alert("Student Added Successfully");
       window.location.reload(true);

      }
      else{
        window.alert("Addition failed, please try again !")
      }
      
     });
    }

  }

  const deleteStudent=(id)=>{

    if(window.confirm("Are you sure, you want to delete ?") ===true){
      axios.delete('http://localhost:8000/api/v1/STUDENT/student-delete',{
        params:{studentId:id},

    }).then((response) => { window.alert(response.data);
                            window.location.reload(true);})
    }
    else{
      window.alert("You have cancelled deletion !")
    }

    
  }
  const [student,setStudent]=useState([]);
  const [sid,setSID]= useState('');
  const findStudent =() => {
    axios.get('http://localhost:8000/api/v1/STUDENT/student/studentId',{
        params:{studentId:sid},

    }).then((response) => {
      window.alert("Match Found");
      setStudent(response.data)})
}

  return (
    <>
    <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            Students
          </Link>
          <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="SearchById" type="text"  onChange={(e)=> setSID(e.target.value)}/>
                <Button onClick={findStudent}>Search</Button>
              </InputGroup>
            </FormGroup>
          </Form>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={require("../../assets/img/theme/team-4-800x800.jpg")}
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                      Hi Teacher!
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem to="/auth/login" tag={Link}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          ID
                        </CardTitle>
                      </div>
                    </Row>
                  <CardBody>
                    
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
                    autoComplete="new-text"
                    onChange={(e)=>setStudentId(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="4">
              <Card className="card-stats mb-4 mb-xl-0">
                <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Name
                        </CardTitle>
                      </div>
                    </Row>
                  <CardBody>
                    
                    <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-single-02" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Full Name"
                    type="text"
                    autoComplete="new-text"
                    onChange={(e)=>setStudentName(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="4">
              <Card className="card-stats mb-4 mb-xl-0">
                <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Section
                        </CardTitle>
                      </div>
                    </Row>
                  <CardBody>
                    
                    <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-bullet-list-67" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Section"
                    type="text"
                    autoComplete="new-text"
                    onChange={(e)=>setSection(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      {/* Page content */}
      <Container className="mt--7" fluid>
      <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Student Details</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={addStudent}
                      size="sm"
                    >
                      Add Student
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Section</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td>{student.studentId}</td>
                    <td>{student.studentName}</td>
                    <td>{student.section}</td>
                    <td><button className="btn btn-primary btn-sm" onClick={()=>updateStudent(student.studentId)}>Edit</button></td>
                    <td><button className="btn btn-danger btn-sm" onClick={()=> deleteStudent(student.studentId)}>Delete</button></td>
                  </tr>
                {students.map( s => <tr>
                    <td>{s.studentId}</td>
                    <td>{s.studentName}</td>
                    <td>{s.section}</td>
                    <td><button className="btn btn-primary btn-sm" onClick={()=>updateStudent(students.studentId)}>Edit</button></td>
                    <td><button className="btn btn-danger btn-sm" onClick={()=> deleteStudent(s.studentId)}>Delete</button></td>
                </tr> )}    
                </tbody>
              </Table>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </>
  );
};

export default Students;
